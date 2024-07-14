<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition name="route">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playwrite+HR:wght@100..400&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: #f1f1f1;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
}

body {
  margin: 0;
  background: #121212;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease;
}

.route-enter-to {
  opacity: 1;
}
</style>
