<template>
  <div class="control-button" :style="btnStyle">
    <img :src="iconPath" />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["icon", "color", "size"],
  setup(props) {
    const iconPath = computed(() => {
      return require("@/assets/images/" + props.icon + ".svg");
    });
    const btnStyle = computed(() => {
      return {
        backgroundColor: props.color,
        height: props.size + "rem",
        width: props.size + "rem",
      };
    });

    return {
      iconPath,
      btnStyle,
    };
  },
};
</script>

<style scoped>
.control-button {
  position: relative;
  cursor: pointer;
  border-radius: 50%;
}
img {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0.2rem;
}
@media only screen and (max-width: 1024px) {
}
</style>