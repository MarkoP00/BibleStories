<template>
  <section>
    <div class="containerTitle">
      <h3>Choose your Bible Story</h3>
    </div>
    <ul>
      <li v-for="story in storiesData" :key="storiesData.id">
        <div class="card">
          <div class="card-img">
            <img :src="`/storyImages/${story.image}`" :alt="`${story.image}`" />
          </div>
          <div class="card-body">
            <span class="bg"></span>
            <span class="bg"></span>
            <span class="bg"></span>
            <div class="content">
              <h2 class="title">{{ story.title }}</h2>
              <p class="para">
                {{ story.aboutVideo }}
              </p>
              <GlobalButton
                @click="navigateToStory(story.id)"
                style="height: 40px; width: 120px"
              ></GlobalButton>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import GlobalButton from "./global/GlobalButton.vue";
import { useRouter } from "vue-router";

const storiesData = ref([]);
const router = useRouter();

async function getStories() {
  try {
    const response = await fetch(
      "https://biblestories-88275-default-rtdb.europe-west1.firebasedatabase.app/stories.json"
    );
    const responseData = await response.json();
    if (responseData) {
      storiesData.value = responseData;
      localStorage.setItem("localStories", JSON.stringify(responseData));
    } else {
      throw new Error("Could not fetch the data!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function navigateToStory(id) {
  Object.keys(storiesData.value).forEach((key) => {
    if (storiesData.value[key].id === id) {
      localStorage.setItem(
        "localSingleStory",
        JSON.stringify(storiesData.value[key])
      );
    }
  });
  router.push(`/singleStory/${id}`);
}

onMounted(() => {
  const localStories = localStorage.getItem("localStories");
  if (localStories) {
    storiesData.value = JSON.parse(localStories);
  } else {
    getStories();
  }
});
</script>

<style scoped>
section {
  flex-direction: column;
}

ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  list-style: none;
  padding: 20px;
  transition: 0.5s;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
}

.card {
  width: 100%;
  width: 300px;
  height: 350px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
}

.card-img {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 20px;
  transform: translateZ(40px);
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.card-body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, -40px) rotateY(180deg);
  width: 90%;
  height: 90%;
  border-radius: 20px;
  overflow: hidden;
  border: 5px solid #fff;
}

.card:hover {
  transform: rotateY(180deg);
}

.card-body .bg {
  position: absolute;
  background: #fff;
  border-radius: 100px;
  width: 0%;
  transition: 0.5s;
}

.card-body .bg:nth-child(1) {
  height: 40%;
  transform-origin: left;
  top: 0;
  left: -25%;
  transform: rotate(-10deg);
}

.card-body .bg:nth-child(2) {
  height: 50%;
  transform-origin: right;
  top: 5%;
  right: -30%;
  transform: rotate(-10deg);
}

.card-body .bg:nth-child(3) {
  height: 50%;
  transform-origin: left;
  top: 70%;
  left: -30%;
  transform: rotate(-10deg);
}

.card:hover .card-body .bg {
  width: 200%;
  transition-delay: 0.5s;
}

.card:hover .card-body .bg:nth-child(2) {
  transition-delay: 1s;
}

.card:hover .card-body .bg:nth-child(3) {
  transition-delay: 1.5s;
}

.content {
  position: relative;
  opacity: 0;
  padding: 10px;
  text-align: center;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.containerTitle {
  margin-top: 65px;
  font-size: 25px;
  margin-bottom: 20px;
  color: #000;
  text-transform: uppercase;
  pointer-events: none;
}
.title {
  font-size: 18px;
  color: #000;
  text-transform: uppercase;
  pointer-events: none;
}
.para {
  color: #000;
  width: 100%;
  font-size: 15px;
  pointer-events: none;
}
.card:hover .content {
  opacity: 1;
  transition-delay: 2s;
}
@media (max-width: 1426px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
  .containerTitle {
    margin-top: 75px;
  }
}

@media (max-width: 1024px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 720px) {
  ul {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 450px) {
  .containerTitle {
    font-size: 18px;
  }

  .title {
    font-size: 17px;
  }
  .para {
    font-size: 15px;
  }
}
</style>
