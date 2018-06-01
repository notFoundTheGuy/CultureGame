<template>
  <div class="page6">
    <div class="center" v-if="isRight" @click="next">
      <v-right></v-right>
    </div>
    <div class="center" v-else>
      <div>
        <img src="../assets/public/borderbg.png"  class="border-bg">
      </div>
      <div>
        <div class="line">
            <img src="../assets/page6/line.png" >
        </div>
        <img src="../assets/page6/topic.png"  class="topic">
        <!-- <img src="../assets/page6/line.png"  class="line"> -->
      </div>
      <div>
        <div class="a" @click="choose(1)">
          <img src="../assets/page6/a.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[1]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[1]" class="icon">
        </div>
        <div class="b" @click="choose(2)">
          <img src="../assets/page6/b.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[2]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[2]" class="icon">
        </div>
        <div class="c" @click="choose(3)">
          <img src="../assets/page6/c.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[3]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[3]" class="icon">
        </div>
        <div class="d" @click="choose(4)">
          <img src="../assets/page6/d.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[4]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[4]" class="icon">
        </div>
        <img src="../assets/public/done3567.png" @click="done" class="done">
      </div>
      <div class="answer" v-if="real" @click="next">
        <img src="../assets/public/title.png"  class="title">
        <img src="../assets/page6/text.png"  class="text">
        <img src="../assets/page6/heart.png"  class="heart">
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
      msg: "page4",
      isRight: false,
      isDone: false,
      real: false,
      chooseState: [0,false,false,false,false],
      score: this.$route.params.score?this.$route.params.score:0,
      answer: 1,
      rightAns: 3
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
        path: "page7",
        name: "page7",
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
  height: 113.75vw;
  position: absolute;
  top: 0;
  left: 0;
}
/* .line {
  width: 28.75vw;
  height: 23.44vw;
  position: absolute;
  top: 38vw;
  left: 17vw;
} */
.line {
  width: 28.75vw;
  height: 23.44vw;
  position: absolute;
  top: 38vw;
  left: 17vw;
  overflow: hidden;
}
.line img {
  width: 28.75vw;
  height: 23.44vw;
}
.line::after {
  content: "";
  position: absolute;
  top: -20%;
  left: 0;
  background: #00caf8;
  height: 120%;
  width: 100%;
  transform: scaleX(1.1);
  animation: line 0.9s infinite;
  transform-origin: 0 0;
}
@keyframes line {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}
.a {
  width: 63.91vw;
  height: 11.72vw;
  position: absolute;
  top: 107vw;
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
  top: 121vw;
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
  top: 134.5vw;
  left: 10vw;
}
.c img:nth-child(1) {
  width: 63.91vw;
  height: 11.72vw;
}
.d {
  width: 63.91vw;
  height: 11.72vw;
  position: absolute;
  top: 148vw;
  left: 10vw;
}
.d img:nth-child(1) {
  width: 63.91vw;
  height: 11.72vw;
}
.done {
  width: 15vw;
  height: 52.03vw;
  position: absolute;
  top: 107.5vw;
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
  top: 55vw;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  width: 100vw;
  height: 63.59vw;
  position: absolute;
  top: 72vw;
  left: 50%;
  transform: translateX(-50%);
}
.heart {
  width: 54.38vw;
  height: 25.16vw;
  position: absolute;
  top: 102vw;
  left: 23vw;
  animation: heart 0.5s infinite;
}
@keyframes heart {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
    transform: scale(1.01)
  }
  100% {
    opacity: 0.5;
  }
}
</style>