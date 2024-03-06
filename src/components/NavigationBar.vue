<template>
  <nav>
    <div class="navbar">
      <p class="element"><router-link to="/">Home</router-link></p>
      <p class="element">
        <router-link to="/todolist">To Do</router-link>
      </p>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationBar",
});
</script>

<style scoped>
.navbar {
  height: 100px;
  width: 100%;
  background-color: white;
  border: 1px solid #46ad46;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.element {
  margin-left: 20px;
  font-size: 30px;
  color: #46ad46;
}
</style>
