<template>
  <div class="myCard" :style="cardStyle">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const cardStyle = computed(() => {
      const bol = store.getters["theme/colors"]["borderCheck"];
      if (bol) {
        return {
          boxShadow:
            "0px 0px 0px 1px var(--secondColor),0px 0px 0px 2px var(--thirdColor), 0px 0px 0px 3px var(--firstColor)",
        };
      } else {
        return {
          boxShadow: "0 2px 2px 1px rgba(0, 0, 0, 0.2)",
        };
      }
    });

    return {
      cardStyle,
    };
  },
};
</script>

<style scoped>
.myCard {
  position: relative;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
  /* box-shadow: 0px 0px 0px 1px var(--secondColor),
    0px 0px 0px 2px var(--thirdColor), 0px 0px 0px 3px var(--firstColor); */
  overflow-x: hidden;

  /* border-image-source: linear-gradient(to left, #5a189a, #0353a4);
  border-image-width: 0.1rem;
  border-image-slice: 27; */
}

@media only screen and (max-width: 1024px) {
  .myCard {
    /* margin: 0px;
    border-radius: 0px;
    height: 100vh;
    width: 100vw; */
  }
}
</style>
