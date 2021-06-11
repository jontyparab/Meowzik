<template>
  <button class="myBtn" :style="btnStyle"><slot></slot></button>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["tcolor", "color"],
  setup(props) {
    const btnStyle = computed(() => {
      return {
        backgroundColor: props.color,
        color: props.tcolor,
      };
    });
    return {
      btnStyle,
    };
  },
};
</script>

<style scoped>
.myBtn {
  height: 2rem;
  min-width: 30%;
  letter-spacing: 0.2ch;
  margin: 0.3rem;
  border: none;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.4rem;
}
</style>