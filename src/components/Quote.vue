<template>
  <div class="quoteContent">
    <div class="title">
      <h3>Bible quote for you</h3>
    </div>
    <h4>" {{ randomQuote.title }} "</h4>
    <p>{{ randomQuote.location }}</p>
  </div>
</template>

<script setup>
import quotes from "@/quotes";
import { ref, onMounted } from "vue";
const allQuotes = quotes;
const randomQuote = ref([]);

function generateQuote() {
  randomQuote.value = allQuotes[Math.floor(Math.random() * 10)];
  console.log(randomQuote.value);
}

onMounted(() => {
  generateQuote();
});
</script>

<style scoped>
.quoteContent {
  width: 100%;
  background-color: rgb(41, 41, 41, 0.8);
  border: 2px solid rgba(255, 60, 120, 1);
  padding: 20px;
  color: white;
  line-height: 1.6;
  font-size: 1.2rem;
  text-align: justify;
  border-radius: 20px;
  line-height: 50px;
}
.quoteContent h3 {
  color: rgba(255, 60, 120, 1);
}
.quoteContent h4,
.quoteContent p {
  font-family: "Playwrite HR";
}
</style>
