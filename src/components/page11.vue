<template>
  <div class="page11">
    <div class="center" v-if="isRight" @click="next">
      <v-right></v-right>
    </div>
    <div class="center" v-else>
      <div>
        <img src="../assets/public/borderbg.png"  class="border-bg">
      </div>
      <div>
        <img src="../assets/page11/topic.png"  class="topic">
        <img src="../assets/page11/ask1.png"  class="ask1">
        <img src="../assets/page11/ask2.png"  class="ask2">
      </div>
      <div>
        <div class="a" @click="choose(1)">
          <img src="../assets/page11/a.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[1]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[1]" class="icon">
        </div>
        <div class="b" @click="choose(2)">
          <img src="../assets/page11/b.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[2]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[2]" class="icon">
        </div>
        <div class="c" @click="choose(3)">
          <img src="../assets/page11/c.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[3]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[3]" class="icon">
        </div>
        <img src="../assets/public/done9.png"  @click="done" class="done"> 
      </div>
      <div class="answer" v-if="real" @click="next">
        <img src="../assets/public/title.png"  class="title">
        <img src="../assets/page11/text.png"  class="text">
        <div class="arrow1">
          <img src="../assets/page11/arrow1.png" >
        </div>
        <div class="arrow2">
          <img src="../assets/page11/arrow2.png" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import right from "@/components/right";
export default {
  name: "page11",
  data() {
    return {
      isRight: false,
      isDone: false,
      real: false,
      chooseState: [0,false,false,false,false],
      score: this.$route.params.score ? this.$route.params.score : 0,
      answer: 1,
      rightAns: 2
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
        path: "page12",
        name: "page12",
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
  height: 123.28vw;
  position: absolute;
  top: 0;
  left: 0;
}
.ask1 {
  width: 9.22vw;
  height: 20vw;
  position: absolute;
  top: 62.5vw;
  left: 43vw;
  animation: ask1 0.5s infinite;
  transform-origin: 57.6% 81.25%;
}
@keyframes ask1 {
  0% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.8;
  }
}
.ask2 {
  width: 10vw;
  height: 16.09vw;
  position: absolute;
  top: 65.5vw;
  left: 50vw;
  animation: ask2 0.8s forwards infinite;
  transform-origin: 53.125% 81.55%;
}
@keyframes ask2 {
  0% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.8;
  }
}
.a {
  width: 63.91vw;
  height: 11.72vw;
  position: absolute;
  top: 118vw;
  left: 10vw;
}
.a img:nth-child(1) {
  width: 63.91vw;
  height: 11.72vw;
}
.b {
  width: 63.91vw;
  height: 11.72vw;
  position: absolute;
  top: 131.5vw;
  left: 10vw;
}
.b img:nth-child(1) {
  width: 63.91vw;
  height: 11.72vw;
}
.c {
  width: 63.91vw;
  height: 11.72vw;
  position: absolute;
  top: 145vw;
  left: 10vw;
}
.c img:nth-child(1) {
  width: 63.91vw;
  height: 11.72vw;
}
.done {
  width: 15vw;
  height: 38.75vw;
  position: absolute;
  top: 118.5vw;
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
  top: 58vw;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  width: 100vw;
  height: 51.72vw;
  position: absolute;
  top: 84vw;
  left: 50%;
  transform: translateX(-50%);
}
.arrow1 {
  width: 2.81vw;
  height: 5.18vw;
  position: absolute;
  top: 100vw;
  left: 25vw;
  overflow: hidden;
  animation: arrow1 0.9s infinite;
}
.arrow1 img{
  width: 2.81vw;
  height: 5.18vw;
}
.arrow2 {
  width: 2.34vw;
  height: 5.62vw;
  position: absolute;
  top: 99.5vw;
  left: 73vw;
  overflow: hidden;
  animation: arrow2 0.9s infinite;
}
.arrow2 img{
  width: 2.34vw;
  height: 5.62vw;
}
@keyframes arrow1 {
  0% {
    height: 0;
  }
  100% {
    height: 5.18vw;
  }
}
@keyframes arrow2 {
  0% {
    height: 0;
  }
  100% {
    height: 5.62vw;
  }
}
</style>