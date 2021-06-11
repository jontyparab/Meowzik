<template>
  <div class="background-overlay"></div>
  <img :src="backgroundImg" class="background" />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const backgroundImg = ref(require("@/assets/images/cat1.jpg"));

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
  background-color: rgba(0, 0, 0, 0.6);
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