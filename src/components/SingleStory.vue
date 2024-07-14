<template>
  <main>
    <div class="topSide">
      <img
        :src="`/src/assets/storyImages/${singleStoryData.image}`"
        alt="Story Image"
      />
      <h2>{{ singleStoryData.title }}</h2>
    </div>
    <div class="mainContent">
      <div class="storyDescription">
        <h3>About the story</h3>
        <p>{{ singleStoryData.description }}</p>
      </div>
      <div class="videoSource">
        <iframe
          width="100%"
          height="415"
          :src="`${singleStoryData.videoSource}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style="border-radius: 20px"
        ></iframe>
      </div>
      <div class="quote">
        <Quote></Quote>
      </div>
    </div>
  </main>

  <div class="container">
    <img src="/src/assets/bg2img.jpg" alt="" loading="lazy" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Quote from "../components/Quote.vue";

const singleStoryData = ref([]);
const props = defineProps({
  id: String,
});

async function getStory(id) {
  try {
    const response = await fetch(
      `https://biblestories-88275-default-rtdb.europe-west1.firebasedatabase.app/stories.json`
    );
    const responseData = await response.json();
    if (responseData) {
      Object.keys(responseData).forEach((key) => {
        if (responseData[key].id === id) {
          singleStoryData.value = responseData[key];
          localStorage.setItem(
            "localSingleStory",
            JSON.stringify(responseData[key])
          );
        }
      });
      console.log(singleStoryData.value);
    } else {
      throw new Error("Story not found!");
    }
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  const singleStoryFromLocal = localStorage.getItem("localSingleStory");

  if (singleStoryFromLocal) {
    singleStoryData.value = JSON.parse(singleStoryFromLocal);
  } else {
    getStory(props.id);
  }
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.topSide {
  width: 100%;
  height: 500px;
  position: relative;
}

.topSide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.topSide h2 {
  position: absolute;
  bottom: 45%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border: 3px solid #fff;
  padding: 10px;
  background-color: rgba(255, 60, 120, 0.6);
}
.mainContent {
  max-width: 800px;
  padding: 10px;
}
.storyDescription {
  width: 100%;
  background-color: rgb(41, 41, 41, 0.8);
  border: 2px solid rgba(255, 60, 120, 1);
  padding: 20px;
  color: white;
  line-height: 1.6;
  font-size: 1.2rem;
  text-align: justify;
  border-radius: 20px;
}
.storyDescription h3 {
  color: rgba(255, 60, 120, 1);
}
.videoSource {
  width: 100%;
  margin: 50px 0;
}

.container {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100svh;
  opacity: 0.5;
}
.container img {
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media (max-width: 700px) {
  .topSide h2 {
    text-align: center;
  }
}
</style>
