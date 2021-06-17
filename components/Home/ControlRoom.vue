<template>
  <!-- Song Track UI -->
  <div class="audio-track-container p-d-flex p-ai-center p-jc-around p-m-3">
    <span>{{ currTimeStr }}</span>
    <base-slider :value="trackPos" @newVal="updateThumb" />
    <span>{{ durationStr }}</span>
  </div>
  <!-- Song Track Element -->
  <audio
    :src="loadSong"
    @timeupdate="autoThumb"
    @ended="changeSong(1)"
    :loop="repeatSong"
    autoplay
    type="audio/mp3"
    ref="audioElm"
  >
    Your browser does not support the audio element.
  </audio>

  <!-- Other Controls -->
  <div class="p-d-flex p-m-2 p-jc-around">
    <div class="control" @click="toggleRepeat">
      <control-button icon="repeat" :color="styleToggle('repeat')" size="1.6" />
    </div>
    <div class="control" @click="toggleShuffle">
      <control-button
        icon="shuffle"
        :color="styleToggle('shuffle')"
        size="1.6"
      />
    </div>
  </div>
  <!-- Main Controls -->
  <div class="p-d-flex p-m-2 p-jc-around p-ai-center">
    <div class="control" @click="changeSong(-1)">
      <control-button icon="previous" color="var(--firstColor)" size="2.2" />
    </div>
    <div class="control" @click="playPauseSong">
      <control-button :icon="playPause" color="var(--firstColor)" size="3.5" />
    </div>
    <div class="control" @click="changeSong(1)">
      <control-button icon="next" color="var(--firstColor)" size="2.2" />
    </div>
  </div>
  <!-- Volume -->
  <base-slider :value="volume" @newVal="setVolume" icon="sound" size="2" />
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const tempIdArr = [];

    const audioElm = ref();
    const playPause = ref("play");
    const volume = ref(50);
    const trackPos = ref(0);

    const songList = computed(() => store.getters.songList);
    const currentSong = computed(() => store.getters.currentSong);
    const currTimeStr = ref("0:00");
    const durationStr = computed(() => {
      if (currentSong.value) {
        return getTimeFormat(currentSong.value?.duration);
      } else {
        return "OwO";
      }
    });

    const loadSong = computed(() => {
      const track = currentSong.value;
      return track ? track.audioTrack : null;
    });

    watch(loadSong, () => {
      setVolume(volume.value);
      playPause.value = "pause";
    });

    const playPauseSong = () => {
      if (currentSong.value) {
        if (audioElm.value.paused) {
          playPause.value = "pause";
          audioElm.value.play();
        } else {
          playPause.value = "play";
          audioElm.value.pause();
        }
      }
    };

    const changeSong = (val = 1) => {
      const ind = songList.value.findIndex(
        (song) => song?.id === currentSong.value?.id
      );
      let nextInd;
      if (shuffleSongs.value) {
        if (tempIdArr.length < songList.value.length - 1) {
          tempIdArr.push(currentSong.value.id);
          const filteredArr = songList.value.filter(
            (song) => !tempIdArr.includes(song.id)
          );
          const randomInd = Math.floor(Math.random() * filteredArr.length);
          store.dispatch("currentSong", filteredArr[randomInd]);
        } else {
          tempIdArr.length = 0;
          changeSong();
        }
      } else {
        // If there is just one song then it doesn't repeat it since currentSong is same as next song so no re-render
        //If repeat is on then ofcourse the song repeats;
        const length = songList.value.length;
        nextInd = (ind + val < 0 ? length - 1 : ind + val) % length;
        store.dispatch("currentSong", songList.value[nextInd]);
      }
    };
    const repeatSong = ref(false);
    const toggleRepeat = () => {
      repeatSong.value = !repeatSong.value;
    };

    const shuffleSongs = ref(false);
    const toggleShuffle = () => {
      tempIdArr.length = [];
      shuffleSongs.value = !shuffleSongs.value;
    };
    const styleToggle = computed(() => {
      return (btn) => {
        if (btn === "shuffle") {
          return shuffleSongs.value ? "var(--secondColor)" : "#d3d3d3";
        } else if (btn === "repeat") {
          return repeatSong.value ? "var(--secondColor)" : "#d3d3d3";
        }
        return;
      };
    });

    // Volume
    const setVolume = (newVal) => {
      audioElm.value.volume = newVal / 100;
      volume.value = newVal;
    };

    // Track Movement
    const updateThumb = (newVal) => {
      playPause.value = "pause";
      if (!currentSong.value) {
        return;
      }
      audioElm.value.currentTime = (currentSong.value?.duration * newVal) / 100;
      updateTime();
    };
    const autoThumb = () => {
      const percentCovered =
        (audioElm.value?.currentTime / currentSong.value?.duration) * 100;
      trackPos.value = percentCovered;
      updateTime();
    };
    const updateTime = () => {
      currTimeStr.value = getTimeFormat(audioElm.value?.currentTime);
    };
    const getTimeFormat = (time) => {
      const minutes = String(Math.floor(time / 60));
      let seconds = String(Math.floor(time % 60));
      seconds = seconds.length < 2 ? "0" + seconds : seconds;
      return minutes + ":" + seconds;
    };

    return {
      audioElm,
      playPause,
      durationStr,
      trackPos,
      currTimeStr,
      volume,
      loadSong,
      repeatSong,
      changeSong,
      playPauseSong,
      toggleRepeat,
      toggleShuffle,
      styleToggle,
      autoThumb,
      updateThumb,
      updateTime,
      setVolume,
    };
  },
};
</script>

<style scoped>
.audio-track-container {
  width: 100%;
}
.control {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

@media only screen and (max-width: 1024px) {
  .control {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>