<template>
  <base-card>
    <draggable
      v-model="songList"
      tag="transition-group"
      :component-data="{
        tag: 'div',
      }"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      handle=".handle"
    >
      <template #item="{ element, index }">
        <div class="song-item p-d-flex p-ai-center p-jc-start">
          <control-button
            class="handle p-mx-2"
            icon="drag"
            color="var(--thirdColor)"
            size="1.5"
          />
          <span class="queue-song-name">{{ element.name }}</span>
          <control-button
            class="p-ml-auto"
            @click="removeSong(index)"
            icon="delete"
            color="var(--seventhColor)"
            size="1.5"
          />
          <control-button
            class="p-ml-2"
            :class="shouldRotate(element)"
            @click="playSong(element)"
            :icon="playPauseIcon(element)"
            color="var(--sixthColor)"
            size="1.5"
          />
        </div>
      </template>
    </draggable>
  </base-card>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import draggable from "vuedraggable";
export default {
  components: { draggable },
  setup() {
    const store = useStore();
    const songList = computed({
      get: () => {
        return store.getters.songList;
      },
      set: (value) => {
        store.dispatch("setSongList", value);
      },
    });
    const currentSong = computed(() => store.getters.currentSong);
    const drag = ref(false);
    const dragOptions = computed(() => {
      return {
        animation: 150,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    });

    const shouldRotate = (element) => {
      return playPauseIcon(element) === "music" ? "rotateBtn" : "";
    };
    const playPauseIcon = (song) => {
      if (currentSong.value?.id === song?.id) {
        return "music";
      } else {
        return "play";
      }
    };
    const playSong = (song) => {
      store.dispatch("currentSong", song);
    };
    const removeSong = (index) => {
      const bol = currentSong.value.id === songList.value[index].id;
      URL.revokeObjectURL(songList.value[index].audioTrack);
      URL.revokeObjectURL(songList.value[index].image);
      songList.value.splice(index, 1);
      if (bol) {
        if (songList.value[0] === undefined) {
          store.dispatch("currentSong", null);
        } else {
          store.dispatch("currentSong", songList.value[0]);
        }
      }
    };
    return {
      songList,
      drag,
      dragOptions,
      shouldRotate,
      playPauseIcon,
      playSong,
      removeSong,
    };
  },
};
</script>

<style scoped lang='scss'>
.myCard {
  margin: 1.5rem;
  padding: 1rem;
  height: auto;
  width: auto;
  min-height: 75%;
  max-height: 75%;
  // color: var(--thirdColor);
  overflow: auto !important;
}
.song-item {
  margin: 0.4rem;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  padding: 0.5rem;
  vertical-align: middle;
  border-radius: 0.5rem;
  border-bottom: solid 0.1rem rgba(169, 169, 169, 0.274);
}
.queue-song-name {
  flex: 1;
  white-space: nowrap;
  font-weight: thick;
  overflow: clip;
  text-overflow: ellipsis;
}
.handle {
  cursor: grab !important;
  border-radius: 0.4rem !important;
}
.ghost {
  opacity: 0.7;
  color: var(--thirdColor);
  border-radius: 0.5rem;
  background: #0353a4ff;
}
.rotateBtn {
  animation: rotate 5s infinite linear;
  // animation-duration: 5s;
  // animation-iteration-count: infinite;
  // animation-timing-function: linear;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 1024px) {
  .myCard {
    margin: 0px;
    padding: 0.2rem;
    height: 50vh;
    width: 100vw;
    scroll-behavior: smooth;
  }
  .song-item {
    margin: 0.3rem;
    padding: 0.3rem;
  }
  .queue-song-name {
    font-size: 0.9rem;
  }
}
</style>