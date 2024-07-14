<template>
  <header ref="headerRef" @click.stop>
    <div class="navbar">
      <div class="logo">
        <router-link to="/home">Bible Stories</router-link>
      </div>
      <ul class="links">
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/list">Stories</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
      <div class="toggle_btn" @click="toggleHamburger">
        <i v-if="!hamburgerVisible" class="fa-solid fa-bars"></i>
        <i v-else class="fa-solid fa-xmark"></i>
      </div>
    </div>
    <transition name="top-scale">
      <ul class="dropDown" v-if="hamburgerVisible">
        <li><router-link to="/home">Home</router-link></li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/list">Stories</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const hamburgerVisible = ref(false);
const headerRef = ref(null);

function toggleHamburger() {
  hamburgerVisible.value = !hamburgerVisible.value;
}

function handleClickOutside(event) {
  if (headerRef.value && !headerRef.value.contains(event.target)) {
    hamburgerVisible.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.links li {
  list-style: none;
}
.links li a {
  text-decoration: none;
  color: #fff;
  font-size: 1.05rem;
  transition: color 0.2s;
  position: relative;
  letter-spacing: 0.5px;
  padding: 0 10px;
  font-weight: 500;
}

.links li a:hover {
  color: #ff3c78;
  opacity: 1;
}

header {
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 2rem;
  width: 100%;
  border-bottom: 2px solid #ff3c78;
  transition: 0.2s all;
  z-index: 9999;
}

.navbar {
  width: 100%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar .logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  transition: color 0.2s;
}
.navbar .logo a:hover {
  color: #ff3c78;
}
.navbar .links {
  display: flex;
  gap: 2rem;
}
.navbar .toggle_btn {
  color: #fff;
  font-size: 1.7rem;
  cursor: pointer;
  display: none;
  opacity: 0;
  visibility: hidden;
}
.dropDown {
  position: absolute;
  right: 2rem;
  top: 60px;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #ff3c78;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
}

.dropDown li {
  list-style: none;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: background-color 0.2s;
  cursor: pointer;
}
.dropDown li:hover {
  background-color: rgba(255, 60, 120, 0.7);
}
.dropDown li a {
  text-decoration: none;
  color: #fff;
}

@media (max-width: 990px) {
  .navbar .links {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  .navbar .toggle_btn {
    display: block;
    opacity: 1;
    visibility: visible;
  }
}
@media (max-width: 576px) {
  .dropDown {
    left: 2rem;
    width: unset;
  }
}

/* dropdown animation */

.top-scale-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.top-scale-enter-active,
.top-scale-leave-active {
  transition: all 0.4 ease;
}
.top-scale-enter-to,
.top-scale-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.top-scale-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
