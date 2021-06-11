<template>
  <div class="myCard">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.myCard {
  position: relative;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 0px 1px #59189a20, 0px 0px 0px 2px #f48c0620,
    0px 0px 0px 3px #0353a420;
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
