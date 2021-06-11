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
      :id="clr.id"
      @input="logging"
    />
  </div>
</template>

<script>
// import { reactive } from "vue";

export default {
  setup() {
    const customization = [
      { name: "Play/Pause Buttons", id: "first-color" },
      { name: "Repeat/Shuffle Buttons", id: "second-color" },
      { name: "Track/ Buttons", id: "third-color" },
      { name: "Button Text", id: "fourth-color" },
      { name: "Track Thumb", id: "fifth-color" },
      { name: "Play Queue", id: "sixth-color" },
      { name: "Remove Queue", id: "seventh-color" },
      { name: "Border", id: "border-check", type: "checkbox" },
    ];

    const logging = (value) => {
      console.log(value);
    };
    return {
      customization,
      logging,
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