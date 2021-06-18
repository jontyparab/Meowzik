<template>
  <base-card>
    <div class="home p-ai-stretch vertical-container">
      <div class="p-col">
        <audio-player></audio-player>
        <customize-tools></customize-tools>
      </div>

      <div class="p-col">
        <song-queue></song-queue>
        <add-file></add-file>
      </div>
    </div>
  </base-card>
</template>

<script>
import CustomizeTools from "../components/Home/CustomizeTools.vue";
import AudioPlayer from "../components/Home/AudioPlayer.vue";
import SongQueue from "../components/Home/SongQueue.vue";
import AddFile from "../components/Home/AddFile.vue";

export default {
  components: { CustomizeTools, AudioPlayer, SongQueue, AddFile },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: row;
}
.myCard {
  width: 80vw;
  height: 90vh;
}
@media only screen and (max-width: 1024px) {
  .home {
    display: initial;
  }
  .myCard {
    margin: 0px;
    border-radius: 0px !important;
    height: 100vh;
    width: 100vw;
  }
}
</style>