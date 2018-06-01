<template>
  <div class="right">
    <div class="center">
        <div>
          <img src="../assets/right/topic.png" alt="" class="topic">
          <img src="../assets/right/next.png" alt="" class="next">
        </div>
        <div>
          <img src="../assets/right/star1.png" alt="" class="star1">
          <img src="../assets/right/star2.png" alt="" class="star2">
          <img src="../assets/right/star3.png" alt="" class="star3">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "right",
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.topic {
  width: 90.31vw;
  height: 139.37vw;
  margin-bottom: 16vw;
}
.next {
  width: 46.25vw;
  height: 13.91vw;
  position: absolute;
  top: 144vw;
  left: 50%;
  transform: translateX(-50%);
}
.star1 {
  width: 5.78vw;
  height: 6.56vw;
  position: absolute;
  top: 72vw;
  left: 25vw;
  animation: star 1s infinite;
}
.star2 {
  width: 8.13vw;
  height: 8.912vw;
  position: absolute;
  top: 94vw;
  left: 17vw;
  animation: star 1.2s infinite;
}
.star3 {
  width: 7.34vw;
  height: 8.12vw;
  position: absolute;
  top: 66vw;
  left: 71vw;
  animation: star 0.8s infinite;
}
@keyframes star {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}
</style>