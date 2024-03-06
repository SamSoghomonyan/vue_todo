<template>
  <div class="div">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.div {
  background-color: #42b883;
  width: 100%;
  height: 100vh;
}
</style>
