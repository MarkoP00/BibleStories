<template>
  <div class="container">
    <img src="/storyImages/bgimage.jpg" alt="" />
  </div>
  <section>
    <div class="content">
      <div class="tite">
        <h1>Stories from the Bible</h1>
      </div>
      <div class="desc">
        <p>Tales of faith, hope, and love for all ages!</p>
      </div>
      <div class="button">
        <GlobalButton @click="navigateToList"></GlobalButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import GlobalButton from "./global/GlobalButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function navigateToList() {
  router.push("/list");
}
</script>

<style scoped>
section {
  background-color: rgba(0, 0, 0, 0.2);
}

.content {
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  font-size: 2rem;
}

.content h1 {
  font-family: "Playwrite HR";
  color: rgba(255, 60, 120, 0.9);
}
.content .desc {
  margin-bottom: 20px;
}

.content .button {
  display: flex;
}
.container {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100svh;
}
.container img {
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
