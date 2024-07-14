<template>
  <section>
    <main>
      <div class="appTitle">
        <h3>Contact Information</h3>
      </div>
      <div class="appDesc">
        <span style="color: rgba(255, 60, 120, 1)">Developer Info</span>
        <ul>
          <li><a href="https://github.com/MarkoP00">GitHub</a></li>
          <li>
            <a href="https://www.linkedin.com/in/marko-pantovic-60a77130a/"
              >LinkedIn</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/marko_pantovic00/?hl=sr"
              >Instagram</a
            >
          </li>
        </ul>
      </div>
      <div class="appDesc">
        <span style="color: #66fcf1">Saddleback Kids Info</span>
        <ul>
          <li><a href="https://www.youtube.com/@SaddlebackKids">YouTube</a></li>
          <li>
            <a href="https://www.instagram.com/saddleback_kids/?hl=sr"
              >Instagram</a
            >
          </li>
        </ul>
      </div>
    </main>
  </section>
  <div class="container">
    <img src="/src/assets/bg3img.jpg" alt="" loading="lazy" />
  </div>
</template>

<style scoped>
section {
  padding: 0 20px;
}
main {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.6;
  letter-spacing: 0.5px;
  background-color: rgba(41, 41, 41, 0.8);
  border: 2px solid rgba(255, 60, 120, 1);
  border-radius: 20px;
  color: #f1f1f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.appTitle h3 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

.appDesc {
  margin-top: 10px;
}

.appDesc span {
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  transition: color 0.3s ease;
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
