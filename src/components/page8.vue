<template>
  <div class="page8">
    <div class="center" v-if="isRight" @click="next">
      <v-right></v-right>
    </div>
    <div class="center" v-else>
      <div>
        <img src="../assets/public/borderbg.png"  class="border-bg">
      </div>
      <div>
        <img src="../assets/page8/topic.png"  class="topic">
        <img src="../assets/page8/star1.png"  class="star1">
        <img src="../assets/page8/star2.png"  class="star2">
        <img src="../assets/page8/star3.png"  class="star3">
      </div>
      <div>
        <div class="a" @click="choose(1)">
          <img src="../assets/page8/a.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[1]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[1]" class="icon">
        </div>
        <div class="b" @click="choose(2)">
          <img src="../assets/page8/b.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[2]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[2]" class="icon">
        </div>
        <div class="c" @click="choose(3)">
          <img src="../assets/page8/c.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[3]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[3]" class="icon">
        </div>
        <div class="d" @click="choose(4)">
          <img src="../assets/page8/d.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[4]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[4]" class="icon">
        </div>
        <img src="../assets/public/done3567.png"  @click="done" class="done"> 
      </div>
      <div class="answer" v-if="real" @click="next">
        <img src="../assets/public/title.png"  class="title">
        <img src="../assets/page8/text.png"  class="text">
        <img src="../assets/page8/cryboy.png"  class="cryboy">
      </div>
    </div>
  </div>
</template>

<script>
import right from "@/components/right";
export default {
  name: "page8",
  data() {
    return {
      isRight: false,
      isDone: false,
      real: false,
      chooseState: [0,false,false,false,false],
      score: this.$route.params.score ? this.$route.params.score : 0,
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
        path: "page9",
        name: "page9",
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
  height: 111.875vw;
  position: absolute;
  top: 0;
  left: 0;
}
.star1 {
  width: 6.09vw;
  height: 7.03vw;
  position: absolute;
  top: 42vw;
  left: 69vw;
  animation: star 0.8s infinite;
}
.star2 {
  width: 7.07vw;
  height: 7.56vw;
  position: absolute;
  top: 40vw;
  left: 25vw;
  animation: star 1s infinite;
}
.star3 {
  width: 2.97vw;
  height: 3.12vw;
  position: absolute;
  top: 49.5vw;
  left: 75.12vw;
  animation: star 1.5s infinite;
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
.a {
  width: 64.06vw;
  height: 11.56vw;
  position: absolute;
  top: 107vw;
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
  top: 121vw;
  left: 10vw;
}
.b img:nth-child(1) {
  width: 64.06vw;
  height: 11.56vw;
}
.c {
  width: 64.06vw;
  height: 11.56vw;
  position: absolute;
  top: 134.5vw;
  left: 10vw;
}
.c img:nth-child(1) {
  width: 64.06vw;
  height: 11.56vw;
}
.d {
  width: 64.06vw;
  height: 11.56vw;
  position: absolute;
  top: 148vw;
  left: 10vw;
}
.d img:nth-child(1) {
  width: 64.06vw;
  height: 11.56vw;
}
.done {
  width: 15.16vw;
  height: 52.2vw;
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
  top: 60vw;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  width: 100vw;
  height: 53.91vw;
  position: absolute;
  top: 79vw;
  left: 50%;
  transform: translateX(-50%);
}
.cryboy {
  width: 33.28vw;
  height: 39.69vw;
  position: absolute;
  top: 86.4vw;
  left: 21vw;
  animation: cryboy 2.5s infinite linear;
}
@keyframes cryboy {
  0% {
    transform: translateX()
  }
  50%{
    transform: translateX(4vw)
  }
  100% {
    transform: translateX()
  }
}
</style>