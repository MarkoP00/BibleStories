<template>
  <button class="slideButton"></button>
</template>

<style scoped>
/* button styles */

.slideButton {
  position: relative;
  background-color: transparent;
  color: #e8e8e8;
  font-size: 17px;
  font-weight: 600;
  border-radius: 10px;
  width: 150px;
  height: 60px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(51, 51, 51, 0.2);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.slideButton::before {
  content: "your story!";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(135deg, #7b4397, #dc2430);
  transform: translate(0%, 90%);
  z-index: 99;
  position: relative;
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.slideButton::after {
  content: "Explore";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform-origin: top;
  transform: translate(0%, -100%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.slideButton:hover::before {
  transform: translate(0%, 0%);
}

.slideButton:hover::after {
  transform: translate(0%, -200%);
}

.slideButton:focus {
  outline: none;
}

.slideButton:active {
  scale: 0.95;
}
</style>
