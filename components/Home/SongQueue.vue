<template>
  <base-card>
    <draggable v-model="queue" tag="div" item-key="id" handle=".handle">
      <template #item="{ element }">
        <div class="song-item p-d-flex p-ai-center p-jc-start">
          <control-button
            class="handle p-mx-2"
            icon="drag"
            color="transparent"
            size="1.5"
          />
          <span class="queue-song-name">{{ element.name }}</span>
          <control-button
            class="p-ml-auto"
            icon="delete"
            color="#ff2c00"
            size="1.5"
          />
          <control-button
            class="p-ml-2"
            icon="play"
            color="#70d900"
            size="1.5"
          />
        </div>
      </template>
    </draggable>
  </base-card>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import draggable from "vuedraggable";
export default {
  components: { draggable },
  setup() {
    const store = useStore();
    const queue = computed({
      get: () => {
        return store.getters.songList;
      },
      set: (value) => {
        store.dispatch("setSongList", value);
      },
    });
    // const clearSong = () => {
    //   console.log("clearsong ran ", store.getters.currentSong);
    //   URL.revokeObjectURL(store.getters.currentSong);
    //   console.log("clearsong ran ", store.getters.currentSong);
    // };
    return {
      queue,
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
  overflow: auto !important;
}
.song-item {
  margin: 0.4rem;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  padding: 0.5rem;
  vertical-align: middle;
  border-bottom: solid rgba(169, 169, 169, 0.274);
}
.queue-song-name {
  flex: 1;
  white-space: nowrap;
  overflow: clip;
  text-overflow: ellipsis;
}
.handle {
  cursor: grab !important;
  border-radius: 0px !important;
  border: none !important;
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