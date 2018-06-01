<template>
  <div class="page4">
    <div class="center" v-if="isRight" @click="next">
      <v-right></v-right>
    </div>
    <div class="center" v-else>
      <div>
        <img src="../assets/public/borderbg.png"  class="border-bg">
      </div>
      <div>
        <img src="../assets/page4/topic.png"  class="topic">
        <img src="../assets/page4/ask1.png"  class="ask1">
        <img src="../assets/page4/ask2.png"  class="ask2">
        <img src="../assets/page4/ask3.png"  class="ask3">
      </div>
      <div>
        <div class="a" @click="choose(1)">
          <img src="../assets/page4/a.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[1]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[1]" class="icon">
        </div>
        <div class="b" @click="choose(2)">
          <img src="../assets/page4/b.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[2]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[2]" class="icon">
        </div>
        <div class="c" @click="choose(3)">
          <img src="../assets/page4/c.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[3]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[3]" class="icon">
        </div>
        <img src="../assets/public/done2.png" class="done" @click="done"> 
      </div>
      <div class="answer" v-if="real" @click="next">
        <img src="../assets/public/title.png" class="title">
        <img src="../assets/page4/text.png"  class="text">
        <img src="../assets/page4/hand.png"  class="hand">
      </div>
    </div>
  </div>
</template>

<script>
import right from "@/components/right";
export default {
  name: "page4",
  data() {
    return {
      isRight: false,
      isDone: false,
      real: false,
      chooseState: [0,false,false,false,false],
      score: this.$route.params.score?this.$route.params.score:0,
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
      this.answer = ans
      this.isDone = true
    },
    done: function() {
      console.log(this.$route.params.score)
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
        path: "page5",
        name: "page5",
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
  height: 118.125vw;
  position: absolute;
  top: 0;
  left: 0;
}
.ask1 {
  width: 10.31vw;
  height: 18.9vw;
  position: absolute;
  top: 36vw;
  left: 24vw;
  animation: ask1 0.8s infinite step-start;
  transform-origin: 100% 100%;
}
.ask2 {
  width: 11.875vw;
  height: 13.59vw;
  position: absolute;
  top: 47vw;
  left: 20vw;
  animation: ask1 0.7s infinite step-start;
}
.ask3 {
  width: 10.94vw;
  height: 14.22vw;
  position: absolute;
  top: 51vw;
  left: 70vw;
  animation: ask1 1s infinite step-start;
}
.icon {
  width: 4.22vw;
  height: 4.22vw;
  position:absolute;
  top: -0.5vw;
  left:-0.5vw;
}
.a {
  width: 64.06vw;
  height: 11.56vw;
  position: absolute;
  top: 113vw;
  left: 10vw;
}
.a img:nth-child(1) {
  width: 64.06vw;
  height: 11.56vw;
}
.b {
  width: 64.06vw;
  height: 11.56vw;
  position: absolute;
  top: 127vw;
  left: 10vw;
}
.b img:nth-child(1) {
  width: 64.06vw;
  height: 11.56vw;
}
.c {
  width: 64.06vw;
  height: 16.874vw;
  position: absolute;
  top: 141vw;
  left: 10vw;
}
.c img:nth-child(1) {
  width: 64.06vw;
  height: 16.874vw;
}
.done {
  width: 15.16vw;
  height: 44.7vw;
  position: absolute;
  top: 113vw;
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
  top: 76vw;
  left: 50%;
  transform: translateX(-50%);
}
.hand {
  width: 37.66vw;
  height: 28.44vw;
  position: absolute;
  top: 114vw;
  left: 57vw;
  animation: hand 1s ease forwards;
  transform-origin: 90% 90%;
}
@keyframes hand {
  0% {
    transform: rotate(-40deg);
  }
  100% {
    transform: rotate();
  }
}

@keyframes ask1 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
