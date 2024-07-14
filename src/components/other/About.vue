<template>
  <section>
    <main>
      <div class="appTitle">
        <h3>About the Bible Stories app</h3>
      </div>
      <div class="appDesc">
        <p>
          <span>Bible Stories</span> app is created with the vision of sharing
          Bible stories in a unique and engaging way. My inspiration came from a
          desire to make these timeless narratives accessible and enjoyable for
          people of all ages. While searching for the best way to present these
          stories, I discovered an incredible content creator on YouTube,
          <a href="https://www.youtube.com/@SaddlebackKids">Saddleback Kids</a>.
          Their fantastic animated Bible story videos bring these stories to
          life in a vivid and captivating manner. In this app, you will find a
          collection of these animations, each carefully selected to provide a
          rich and immersive experience. The app is designed to be
          user-friendly, making it easy to navigate through different stories
          and explore the profound lessons they offer. By combining traditional
          storytelling with modern animation, we aim to create an engaging and
          educational tool that can be enjoyed by children and adults alike. I
          want to give a special shoutout to
          <a href="https://www.youtube.com/@SaddlebackKids">Saddleback Kids </a
          >for their amazing work. Their dedication to creating high-quality,
          animated Bible stories has been a significant inspiration for this
          project. I hope this app serves as a valuable resource for anyone
          looking to deepen their understanding of the Bible in a fun and
          interactive way.
        </p>
      </div>
    </main>
  </section>
  <div class="container">
    <img src="/src/assets/bg3img.jpg" alt="" loading="lazy" />
  </div>
</template>

<style scoped>
main {
  max-width: 800px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 35px;
  letter-spacing: 1.5px;
  background-color: rgb(41, 41, 41, 0.8);
  border: 2px solid rgba(255, 60, 120, 1);
  border-radius: 20px;
}
.appTitle h3 {
  color: rgba(255, 60, 120, 1);
}
.appDesc p span {
  color: rgba(255, 60, 120, 1);
  font-weight: 700;
}
.appDesc p a {
  text-decoration: none;
  color: #66fcf1;
  font-weight: 700;
  cursor: pointer;
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
