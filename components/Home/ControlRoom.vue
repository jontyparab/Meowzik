<template>
  <!-- Song Track UI -->
  <div class="audio-track-container p-d-flex p-ai-center p-jc-around p-m-3">
    <span class="">0:00</span>
    <base-slider color="blue" orientation="horizontal" />
    <span class="">4:12</span>
  </div>
  <!-- Song Track Element -->
  <audio
    :src="loadSong"
    :loop="toggleRepeat"
    autoplay
    type="audio/mp3"
    ref="audioElm"
  >
    Your browser does not support the audio element.
  </audio>

  <!-- Other Controls -->
  <div class="p-d-flex p-m-2 p-jc-around">
    <div class="control" @click="repeatSong">
      <control-button icon="repeat" color="#5a189a" size="1.6" />
    </div>
    <div class="control" @click="shuffleSongs">
      <control-button icon="shuffle" color="#5a189a" size="1.6" />
    </div>
  </div>
  <!-- Main Controls -->
  <div class="p-d-flex p-m-2 p-jc-around p-ai-center">
    <div class="control">
      <control-button icon="previous" color="#0353a4" size="2.2" />
    </div>
    <div class="control" @click="playPauseSong">
      <control-button icon="play" color="#0353a4" size="3.5" />
    </div>
    <div class="control">
      <control-button icon="next" color="#0353a4" size="2.2" />
    </div>
  </div>
  <!-- Volume -->
  <base-slider color="red" icon="sound" size="2" orientation="horizontal" />
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const audioElm = ref();
    const toggleRepeat = ref(false);
    const toggleShuffle = ref(false);

    const loadSong = computed(() => {
      const track = store.getters.currentSong;
      console.log(track);
      return track ? track.audioTrack : null;
    });
    const playPauseSong = () => {
      if (audioElm.value.paused) {
        audioElm.value.play();
      } else {
        audioElm.value.pause();
      }
    };
    const prevSong = () => {};
    const nextSong = () => {};
    const repeatSong = () => {
      toggleRepeat.value = !toggleRepeat.value;
    };
    const shuffleSongs = () => {
      toggleShuffle.value = !toggleShuffle.value;
    };

    return {
      audioElm,
      loadSong,
      repeatSong,
      shuffleSongs,
      prevSong,
      nextSong,
      playPauseSong,
      toggleRepeat,
      toggleShuffle,
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