<template>
  <div
    class="p-my-2 p-d-flex p-ai-center p-jc-around"
    v-for="clr of customization"
    :key="clr.id"
  >
    <span class="p-mr-auto">{{ clr.name }}:&emsp;</span>
    <input
      class="p-ml-auto"
      :type="clr.type || 'color'"
      :value="colors[clr.id]"
      :checked="colors[clr.id]"
      :id="clr.id"
      @change="changeColor"
    />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: ["saveTheme"],
  emits: ["settheme"],
  setup(_, { emit }) {
    const store = useStore();

    const customization = [
      { name: "Play/Pause Buttons", id: "firstColor" },
      { name: "Repeat/Shuffle Buttons", id: "secondColor" },
      { name: "Track/Buttons/Handle", id: "thirdColor" },
      { name: "Text", id: "fourthColor" },
      { name: "Track Thumb", id: "fifthColor" },
      { name: "Play Queue", id: "sixthColor" },
      { name: "Remove Queue", id: "seventhColor" },
      { name: "Border", id: "borderCheck", type: "checkbox" },
    ];

    const colors = computed(() => {
      return store.getters["theme/colors"];
    });
    const newTheme = { ...colors?.value };
    const changeColor = (event) => {
      let val = event.target.value;
      if (event.target.type === "checkbox") {
        val = event.target.checked;
      }
      newTheme[event.target.id] = val;
      emit("settheme", newTheme);
    };
    return {
      colors,
      customization,
      changeColor,
    };
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
</style>