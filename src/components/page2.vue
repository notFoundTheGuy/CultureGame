<template>
  <div class="page2">
    <router-link to="/page3">
        <div class="center">
            <div>
                <img src="../assets/page2/bg.png" alt="" class="bg">
            </div>
            <div>
                <div class="progress">
                    <img src="../assets/page2/progress.png" alt="" >
                </div>
                <div class="bubble1">
                    <img src="../assets/page2/bubble1.png" alt="">
                </div>
                <div class="bubble2">
                    <img src="../assets/page2/bubble2.png" alt="">
                </div>
                <img src="../assets/page2/timer.png" alt="" class="timer">
                <img src="../assets/page2/boy.png" alt="" class="boy">
            </div>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "page2",
  data() {
    return {
    };
  },
  created: function () {
    setTimeout(() => {
      this.$router.push({path:'/page3'})
    }, 1500);
  }
};
</script>

<style scoped>
.bg {
  width: 89.84vw;
  height: 160.77vw;
}
.progress {
  width: 89.375vw;
  height: 9.0625vw;
  position: absolute;
  top: 39vw;
  left: 0.3vw;
  overflow: hidden;
  animation: progress 1.5s forwards;
}
.progress img {
  width: 89.375vw;
  height: 9.0625vw;
}
.timer {
  width: 53.28vw;
  height: 50.47vw;
  position: absolute;
  top: 60vw;
  left: 13vw;
}
.bubble1 {
  width: 14.84vw;
  height: 19.838vw;
  position: absolute;
  top: 52vw;
  left: 38vw;
  overflow: hidden;
  /* animation: bubble1 0.8s infinite; */
}
.bubble1 img {
  width: 14.84vw;
  height: 19.838vw;
}
.bubble1::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: #00caf8;
  height: 100%;
  width: 100%;
  transform: scaleY(1);
  animation: bubble1 0.8s infinite;
  transform-origin: 0 0;
}

.bubble2 {
  width: 16.56vw;
  height: 9.842vw;
  position: absolute;
  top: 78vw;
  left: 4vw;
  overflow: hidden;
}
.bubble2 img {
  width: 16.56vw;
  height: 9.842vw;
}
.bubble2::after {
  content: "";
  position: absolute;
  top: -20%;
  left: 0;
  background: #00caf8;
  height: 120%;
  width: 100%;
  transform: scaleX(1.1);
  animation: bubble2 0.8s infinite;
  transform-origin: 0 0;
}
.boy {
  width: 43.125vw;
  height: 62.1875vw;
  position: absolute;
  top: 96vw;
  left: 41vw;
  animation: boy 0.8s forwards;
}

@keyframes progress {
  0% {
    width: 0;
  }
  100% {
    width: 89.375vw;
  }
}
@keyframes bubble1 {
  0% {
    transform: scalex(1);
  }
  100% {
    transform: scaleY(0);
  }
}
@keyframes bubble2 {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}
@keyframes boy {
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translate(0);
  }
}
</style>
