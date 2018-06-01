<template>
<div class="page1">
  <div class="page center">
      <div class="top">
          <img src="../assets/page1/top.png" class="top">
          <img src="../assets/page1/flash1.png" class="flash1">
          <img src="../assets/page1/flash2.png" class="flash2">
          <img src="../assets/page1/stars.png" alt="" class="stars">
      </div>
      <div class="bottom">
        <router-link to="/page2">
          <img src="../assets/page1/start.png" alt="" class="start">
        </router-link>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "page1",
  data() {
    return {
    };
  }
};
</script>

<style scoped>
/* 第一页 */
.page1 {
  width: 100%;
  height: 100%;
  background: url(../assets/page1/bg.png) no-repeat;
  background-size: 101% 101%;
}
.top {
  width: 100vw;
  height: 137.18vw;
}
.start {
  width: 100vw;
  height: 40.31vw;
}
.flash1 {
  position: absolute;
  width: 9.21vw;
  height: 9.99vw;
  top: 58vw;
  left: 19vw;
  animation: flash1 1.5s infinite linear;
}
.flash2 {
  position: absolute;
  width: 18.28vw;
  height: 13.43vw;
  top: 109vw;
  left: 17vw;
  animation: flash2 1s infinite reverse;
}
.stars {
  position: absolute;
  width: 55.46vw;
  height: 60.14vw;
  top: 60vw;
  left: 20vw;
  animation: star 0.8s 0.5s infinite reverse;
}
@keyframes flash1 {
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(-20px, 20px);
  }
  100% {
    transform: translate(0);
  }
}
@keyframes flash2 {
  0% {
    transform: translate(-10px,-10px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-10px,-10px);
  }
}
@keyframes star {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
