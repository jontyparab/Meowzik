<template>
  <teleport to="main">
    <div class="backdrop"></div>
    <div class="myDialog">
      <div class="header p-d-flex p-ai-end p-jc-between">
        <slot name="title"></slot>
        <control-button
          @click="closeDialog"
          class="p-mx-2"
          icon="delete"
          color="transparent"
          size="2"
        />
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="footer p-d-flex p-ai-end p-jc-around">
        <slot name="footer"></slot>
      </div>
    </div>
  </teleport>
</template>

<script>
// import { ref } from "vue";
import ControlButton from "../Home/ControlButton.vue";
export default {
  components: { ControlButton },
  emits: ["closeDialog"],
  setup(_, { emit }) {
    const closeDialog = () => {
      emit("closeDialog");
    };

    return {
      closeDialog,
    };
  },
};
</script>

<style scoped>
.myDialog {
  position: absolute;
  z-index: 50;
  background: whitesmoke;
  border-radius: 1rem;
  overflow: hidden;
  width: auto;
  height: auto;
  max-width: 70vw;
  max-height: 80vh;
}
.backdrop {
  position: absolute;
  background: linear-gradient(to bottom left, black, rgb(36, 35, 35), black);
  opacity: 0.6;
  z-index: 40;
  height: 100vh;
  width: 100vw;
}
.header {
  background: var(--thirdColor);
  font-size: 1.5rem;
  font-weight: bold;
  height: auto;
  width: 100%;
  padding: 0.2rem;
  padding-left: 0.6rem;
}
.content {
  width: 100%;
  padding: 0.5rem;
  color: black;
  overflow-y: auto;
}
.footer {
  font-size: 1.5rem;
  height: auto;
  width: 100%;
}

@media only screen and (max-width: 480px) {
  .myDialog {
    width: 100vw;
    height: auto;
    overflow: auto;
    max-width: 100vw;
    max-height: 90vh;
  }
}
</style>