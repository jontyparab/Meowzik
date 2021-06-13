<template>
  <background-cover></background-cover>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import BackgroundCover from "./components/Layout/BackgroundCover.vue";
export default {
  components: { BackgroundCover },
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
* {
  font-family: Nunito, sans-serif;
  box-sizing: inherit;
}
main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--fourthColor);
  align-items: center;
}
/*Custom Scroll Bar*/
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4040406c;
  border-radius: 5px;
}
/* Contain the Track piece within the div */
::-webkit-scrollbar-track-piece {
  background: transparent;
  margin: 1rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey;
}
.p-col {
  max-width: 50%;
  max-height: 100%;
  padding: 0px !important;
}
.vertical-container {
  height: 100%;
  width: 100%;
}

@media only screen and (max-width: 1024px) {
  .p-col {
    max-height: initial;
    max-width: initial;
  }
}
</style>
