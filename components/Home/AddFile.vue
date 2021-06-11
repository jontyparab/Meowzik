<template>
  <base-card
    @click="openFileManager"
    @drop.prevent="dropFiles"
    @dragenter.prevent="checkDrop"
    @dragleave.prevent="checkLeave"
    @dragover.prevent
    class="p-d-flex p-flex-column p-ai-center p-jc-center"
  >
    <input
      type="file"
      ref="fileInput"
      @change="inputFiles"
      multiple
      accept="audio/*"
      style="display: none"
    />
    <control-button
      class="go-back"
      icon="addfile"
      color="transparent"
      size="4"
    />
    <span class="go-back">Choose Files OR Drag and Drop</span>
  </base-card>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import Song from "../../models/SongModel.js";
import * as mmb from "music-metadata-browser";
export default {
  setup() {
    const store = useStore();
    const fileInput = ref(null);
    const openFileManager = () => {
      fileInput.value.click();
    };
    const dropFiles = (event) => {
      let files = null;
      if (event.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        files = event.dataTransfer.items;
      } else {
        // Use DataTransfer interface to access the file(s)
        files = event.dataTransfer.files;
      }
      const songArray = [];
      if (files) {
        for (let i = 0; i < files.length; i++) {
          // If dropped files aren't audio files, reject them
          if (files[i].type.match("^audio/")) {
            songArray.push(files[i].getAsFile());
          }
        }
      }
      checkLeave(event);
      loadFiles(songArray);
    };
    const inputFiles = (event) => {
      const songArray = Object.values(event.target.files);
      event.target.value = null;
      loadFiles(songArray);
    };
    const loadFiles = async (songList) => {
      const newSongs = [];
      for (let i = 0; i < songList.length; i++) {
        const md = await mmb.parseBlob(songList[i]);
        // console.log(md);
        const soundurl = URL.createObjectURL(songList[i]);
        const newSong = new Song(
          Date.now() + i,
          songList[i].name,
          soundurl,
          md.common.artists,
          md.common.album,
          md.common.picture ? md.common.picture[0] : null,
          Math.floor(md.format.duration),
          md.common.year,
          md.common.text,
          md.format.codec
        );
        // console.log(newSong);
        newSongs.push(newSong);
      }
      store.dispatch("appendSongList", newSongs);
    };
    const checkDrop = (event) => {
      event.target.style.backgroundColor = "rgba(3, 152, 252, 0.3)";
    };
    const checkLeave = (event) => {
      event.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    };
    return {
      fileInput,
      openFileManager,
      inputFiles,
      dropFiles,
      checkDrop,
      checkLeave,
    };
  },
};
</script>

<style scoped>
.myCard {
  cursor: pointer;
  margin: 1rem;
  padding: 0.5rem;
  height: auto;
  width: auto;
}
.control-button {
  border-radius: 0px !important;
  border: none !important;
}
.go-back {
  z-index: -1;
}
@media only screen and (max-width: 1024px) {
  .myCard {
    margin: 0px;
    width: 100vw;
  }
}
</style>