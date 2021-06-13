<template>
  <div class="background-overlay"></div>
  <img :src="backgroundImg" class="background" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const backgroundImg = computed(() => {
      return store.getters.background;
    });

    return {
      backgroundImg,
    };
  },
};
</script>


<style scoped>
.background-overlay {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
}

.background {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100vh;
  width: 100vw;
  z-index: -2;
  object-fit: cover;
}
</style>