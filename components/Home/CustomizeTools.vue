<template>
  <base-dialog v-if="isVisible" @closeDialog="toggleDialog">
    <template #title>Change Theme</template>
    <template #content> <color-picker /></template>
    <template #footer>
      <base-button color="#0353a4" tcolor="white">DEFAULT</base-button>
      <base-button color="#f48c06" tcolor="white">SAVE</base-button>
    </template>
  </base-dialog>
  <input
    type="file"
    ref="fileInput"
    @change="changeBackground"
    accept="image/*"
    style="display: none"
  />

  <base-card class="p-d-flex p-ai-start p-jc-center">
    <base-button color="#f48c06" tcolor="white" @click="openFileManager"
      >Background</base-button
    >
    <base-button @click="toggleDialog" color="#f48c06" tcolor="white">
      Theme
    </base-button>
  </base-card>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import ColorPicker from "./ColorPicker.vue";
export default {
  components: { ColorPicker },
  setup() {
    const store = useStore();

    const fileInput = ref(null);
    const openFileManager = () => {
      fileInput.value.click();
    };
    const changeBackground = (event) => {
      const [imageArr] = Object.values(event.target.files);
      event.target.value = null;
      URL.revokeObjectURL(store.getters.background);
      store.dispatch("background", URL.createObjectURL(imageArr));
    };

    const isVisible = ref(false);
    const toggleDialog = () => {
      isVisible.value = !isVisible.value;
    };
    return {
      fileInput,
      isVisible,
      changeBackground,
      openFileManager,
      toggleDialog,
    };
  },
};
</script>

<style scoped>
.myCard {
  margin: 1.5rem;
  padding: 0.5rem;
  height: auto;
  width: auto;
  flex-direction: column;
}
@media only screen and (max-width: 1024px) {
  .myCard {
    margin: 0px;
    width: 100vw;
    flex-direction: row;
  }
}
</style>