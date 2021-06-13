<template>
  <base-dialog v-if="isVisible" @closeDialog="toggleDialog">
    <template #title>Change Theme</template>
    <template #content> <color-picker @settheme="saveTheme" /></template>
    <!-- <template #footer>
      <base-button color="#0353a4" tcolor="var(--fourthColor)">DEFAULT</base-button>
      <base-button color="#f48c06" tcolor="var(--fourthColor)">SAVE</base-button>
    </template> -->
  </base-dialog>
  <input
    type="file"
    ref="fileInput"
    @change="changeBackground"
    accept="image/*"
    style="display: none"
  />

  <base-card class="p-d-flex p-ac-start p-jc-center p-flex-wrap">
    <div class="myContainer p-d-flex p-flex-row p-jc-start">
      <base-button
        color="var(--thirdColor)"
        tcolor="var(--fourthColor)"
        @click="openFileManager"
        >Background</base-button
      >
      <span class="mySpan p-as-center p-ml-auto p-mr-auto">{{
        backgroundName
      }}</span>
    </div>
    <div
      @click="toggleDialog"
      class="myContainer p-d-flex p-flex-row p-jc-start p-flex-wrap"
    >
      <base-button color="var(--thirdColor)" tcolor="var(--fourthColor)">
        Theme
      </base-button>
      <div
        v-for="(value, key) in colors"
        :key="key"
        :style="{ backgroundColor: value }"
        class="color-box p-as-center p-ml-auto p-mr-auto"
      ></div>
    </div>
  </base-card>
</template>

<script>
import { ref, computed } from "vue";
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
      store.dispatch("backgroundName", imageArr["name"]);
      store.dispatch("background", URL.createObjectURL(imageArr));
    };
    const backgroundName = computed(() => {
      return store.getters["backgroundName"];
    });
    //Themes
    const colors = computed(() => {
      const colors = store.getters["theme/colors"];
      delete colors["borderCheck"];
      return colors;
    });
    const saveTheme = (newTheme) => {
      store.dispatch("theme/chgTheme", newTheme);
    };

    const isVisible = ref(false);
    const toggleDialog = () => {
      isVisible.value = !isVisible.value;
    };
    return {
      fileInput,
      isVisible,
      changeBackground,
      backgroundName,
      openFileManager,
      colors,
      saveTheme,
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
.myContainer {
  width: 100%;
}
.mySpan {
  white-space: nowrap;
  overflow: clip;
  text-overflow: ellipsis;
}
.color-box {
  height: 1rem;
  width: 1rem;
  border: solid white 0.1rem;
}
@media only screen and (max-width: 1024px) {
  .myCard {
    margin: 0px;
    width: 100vw;
    flex-direction: row;
  }
}
</style>