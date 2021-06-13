<template>
  <div class="slider-container p-d-flex p-ai-center p-jc-center">
    <control-button
      class="p-m-1"
      v-if="icon"
      :icon="icon"
      color="#5a189a"
      :size="size"
    />

    <input
      class="mySlider"
      @input="changeValue"
      :value="value"
      type="range"
      :min="min || 0"
      :max="max || 100"
    />

    <output class="p-mx-1" v-if="icon">{{ value }}</output>
  </div>
</template>

<script>
import { computed } from "vue";
import ControlButton from "../Home/ControlButton.vue";

export default {
  props: ["icon", "size", "min", "max", "value"],
  emits: ["newVal"],
  components: [ControlButton],
  setup(props, { emit }) {
    const iconPath = computed(() => {
      return require("@/assets/images/" + props.icon + ".svg");
    });
    const changeValue = (event) => {
      emit("newVal", event.target.value);
    };
    return {
      iconPath,
      changeValue,
    };
  },
};
</script>

<style scoped lang='scss'>
.slider-container {
  width: 100%;
  height: 100%;
}

/* Reference: https://stackoverflow.com/questions/34850327/styling-input-range-for-webkit-with-pure-css*/
input[type="range"] {
  cursor: pointer;
  border-radius: 0.6rem;
  height: 100%;
  width: 100%;
  &,
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &::-webkit-slider-runnable-track {
    overflow: hidden;
    height: 0.6rem;
    background: linear-gradient(to right, #5a189a, #0353a4);
    border-radius: 0.6rem;
    -webkit-appearance: none;
  }
  &::-webkit-slider-container {
    border-radius: 0.6rem;
  }
  &::-webkit-slider-thumb {
    cursor: ew-resize;
    height: 1rem;
    width: 1rem;
    margin-top: -4px;
    background: white;
    box-shadow: -30rem 0 0 30rem #f48c06;
  }
}
</style>