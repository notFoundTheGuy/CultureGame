<template>
  <div class="page5">
    <div class="center" v-if="isRight" @click="next">
      <v-right></v-right>
    </div>
    <div class="center" v-else>
      <div>
        <img src="../assets/public/borderbg.png"  class="border-bg">
      </div>
      <div>
        <img src="../assets/page5/topic.png"  class="topic">
        <img src="../assets/page5/fly1.png"  class="fly1">
        <img src="../assets/page5/fly2.png"  class="fly2">
        <img src="../assets/page5/fly3.png"  class="fly3">
        <img src="../assets/page5/fly4.png"  class="fly4">
        <img src="../assets/page5/fly5.png"  class="fly5">
      </div>
      <div>
        <div class="a" @click="choose(1)">
          <img src="../assets/page5/a.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[1]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[1]" class="icon">
        </div>
        <div class="b" @click="choose(2)">
          <img src="../assets/page5/b.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[2]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[2]" class="icon">
        </div>
        <div class="c" @click="choose(3)">
          <img src="../assets/page5/c.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[3]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[3]" class="icon">
        </div>
        <img src="../assets/public/done3567.png" @click="done" class="done">
      </div>
      <div class="answer" v-if="real" @click="next">
        <img src="../assets/public/title.png"  class="title">
        <img src="../assets/page5/text.png"  class="text">
        <img src="../assets/page5/water1.png"  class="water1">
        <img src="../assets/page5/water2.png"  class="water2">
        <img src="../assets/page5/water3.png"  class="water3">
        <img src="../assets/page5/water4.png"  class="water4">
      </div>
    </div>
  </div>
</template>

<script>
import right from "@/components/right";
export default {
  name: "page5",
  data() {
    return {
      isRight: false,
      isDone: false,
      real: false,
      chooseState: [0,false,false,false,false],
      score: this.$route.params.score?this.$route.params.score:0,
      answer: 1,
      rightAns: 1
    };
  },
  methods: {
    choose: function(ans) {
      this.chooseState.forEach((v,i) => {
        this.chooseState[i] = false
      });
      this.chooseState.splice(ans,1,true);
      this.answer = ans;
      this.isDone = true;
    },
    done: function() {
      if (this.isDone) {
        if (this.answer == this.rightAns) {
          this.isRight = true;
          this.score = this.score + 10;
        } else {
          this.real = true;
        }
      }
    },
    next: function() {
      console.log(this.score);
      this.$router.push({
        path: "page6",
        name: "page6",
        params: {
          score: this.score
        }
      });
    }
  },
  components: {
    "v-right": right
  }
};
</script>

<style scoped>
.border-bg {
  width: 100vw;
  height: 177.5vw;
}
.topic {
  width: 100vw;
  height: 112.03vw;
  position: absolute;
  top: 0;
  left: 0;
}
.fly1 {
  width: 23.13vw;
  height: 12.66vw;
  position: absolute;
  top: 40.6vw;
  left: 43.7vw;
  animation: fly1 0.8s forwards;
}
@keyframes fly1 {
  0% {
    transform: translate(35vw, -10vw);
  }
  100% {
    transform: translate(0);
  }
}
.fly2 {
  width: 8.91vw;
  height: 9.06vw;
  position: absolute;
  top: 37vw;
  left: 51vw;
  animation: fly2 0.8s forwards;
}
@keyframes fly2 {
  0% {
    transform: translate(20vw, -20vw);
  }
  100% {
    transform: translate(0);
  }
}
.fly3 {
  width: 17.34vw;
  height: 5.47vw;
  position: absolute;
  top: 49vw;
  left: 58vw;
  animation: fly3 0.8s forwards;
}
@keyframes fly3 {
  0% {
    transform: translate(40vw, -5vw);
  }
  100% {
    transform: translate(0);
  }
}
.fly4 {
  width: 11.41vw;
  height: 3.75vw;
  position: absolute;
  top: 55vw;
  left: 73vw;
  animation: fly4 0.8s forwards;
}
@keyframes fly4 {
  0% {
    transform: translate(40vw, -0vw);
  }
  100% {
    transform: translate(0);
  }
}
.fly5 {
  width: 17.34vw;
  height: 5.833vw;
  position: absolute;
  top: 64vw;
  left: 56vw;
  animation: fly5 0.8s forwards;
}
@keyframes fly5 {
  0% {
    transform: translate(40vw, 8vw);
  }
  100% {
    transform: translate(0);
  }
}
.a {
  width: 64.06vw;
  height: 15.16vw;
  position: absolute;
  top: 107vw;
  left: 10vw;
}
.a img:nth-child(1) {
  width: 64.06vw;
  height: 15.16vw;
}
.b {
  width: 64.06vw;
  height: 16.25vw;
  position: absolute;
  top: 124vw;
  left: 10vw;
}
.b img:nth-child(1) {
  width: 64.06vw;
  height: 15.16vw;
}
.c {
  width: 64.06vw;
  height: 16.25vw;
  position: absolute;
  top: 142vw;
  left: 10vw;
}
.c img:nth-child(1) {
  width: 64.06vw;
  height: 16.25vw;
}
.done {
  width: 15.16vw;
  height: 52.2vw;
  position: absolute;
  top: 107vw;
  left: 76.5vw;
}
.answer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(38, 38, 38, 0.81);
}
.title {
  width: 81.875vw;
  height: 21.25vw;
  position: absolute;
  top: 50vw;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  width: 100vw;
  height: 63.59vw;
  position: absolute;
  top: 78vw;
  left: 50%;
  transform: translateX(-50%);
}
.hand {
  width: 37.66vw;
  height: 28.44vw;
  position: absolute;
  top: 116vw;
  left: 57vw;
}
.water1 {
  width: 4.22vw;
  height: 2.5vw;
  position: absolute;
  top: 96vw;
  left: 61vw;
  animation: water1 0.8s infinite;
  transform-origin:100% 300%;
}
@keyframes water1 {
  0% {
    transform: rotate();
    opacity: 1;
  }
  100%{
    transform: rotate(-45deg);
    opacity: 0;
  }
}
.water2 {
  width: 2.81vw;
  height: 1.72vw;
  position: absolute;
  top: 98vw;
  left: 62.5vw;
  animation: water2 0.8s infinite;
  transform-origin: 150% 250%;
}
@keyframes water2 {
  0% {
    transform: rotate();
    opacity: 1;
  }
  100%{
    transform: rotate(-45deg);
    opacity: 0;
  }
}
.water3 {
  width: 3.75vw;
  height: 2.19vw;
  position: absolute;
  top: 96vw;
  left: 81vw;
  animation: water3 0.8s infinite;
  transform-origin: 0% 400%;
}
@keyframes water3 {
  0% {
    transform: rotate();
    opacity: 1;
  }
  100%{
    transform: rotate(45deg);
    opacity: 0;
  }
}
.water4 {
  width: 2.81vw;
  height: 2.03vw;
  position: absolute;
  top: 98vw;
  left: 80.5vw;
  animation: water4 0.8s infinite;
  transform-origin: 0% 300%;
}
@keyframes water4 {
  0% {
    transform: rotate();
    opacity: 1;
  }
  100%{
    transform: rotate(45deg);
    opacity: 0;
  }
}
</style>