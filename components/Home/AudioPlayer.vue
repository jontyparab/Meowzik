<template>
  <base-card>
    <div class="player-container">
      <!-- Song Image -->
      <div class="song-image-container">
        <img :src="songImage" class="song-image" />
      </div>

      <!-- Song Details -->
      <p class="song-name">
        {{ currentSong?.name || "Add few songs..." }}
      </p>
      <p class="artist-name">{{ currentSong?.artists.join()||'<unknown>' }}</p>

      <!-- Control Room -->
      <control-room></control-room>
    </div>
  </base-card>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ControlRoom from "./ControlRoom.vue";

export default {
  components: { ControlRoom },
  setup() {
    const store = useStore();
    const songImage = ref(require("@/assets/images/cat2.jpg"));

    const currentSong = computed(() => {
      return store.getters.currentSong;
    });
    return {
      songImage,
      currentSong,
    };
  },
};
</script>

<style scoped lang='scss'>
.myCard {
  margin: 1.5rem;
  padding: 1rem;
  min-height: 75%;
  max-height: 75%;
  height: auto;
  width: auto;
}
.player-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.song-image-container {
  padding: 0.3rem;
  background: linear-gradient(to right, var(--firstColor), var(--secondColor));
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.song-image {
  object-fit: cover;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
}
.song-name {
  text-align: center;
  margin: 0.4rem;
  font-size: 1.4rem;
  font-weight: bold;
  width: 90%;
}
.artist-name {
  text-align: center;
  font-size: 1rem;
  opacity: 0.6;
  margin: 0.2rem;
  width: 80%;
}
@media only screen and (max-width: 1024px) {
  .myCard {
    margin: 0px;
    padding: 0.4rem;
    max-height: auto !important;
    overflow: clip !important;
    width: 100vw;
  }
  .song-image-container {
    padding: 0.2rem;
  }
  .song-image {
    width: 5rem;
    height: 5rem;
  }
  .song-name {
    font-size: 1.2rem;
  }
  .artist-name {
    font-size: 0.8rem;
    margin: 0rem;
  }
}
</style>