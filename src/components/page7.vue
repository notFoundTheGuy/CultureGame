<template>
  <div class="page7">
    <div class="center" v-if="isRight" @click="next">
      <v-right></v-right>
    </div>
    <div class="center" v-else>
      <div>
        <img src="../assets/public/borderbg.png"  class="border-bg">
      </div>
      <div>
        <img src="../assets/page7/topic.png"  class="topic">
        <img src="../assets/page7/money.png"  class="money">
      </div>
      <div>
        <div class="a" @click="choose(1)">
          <img src="../assets/page7/a.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[1]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[1]" class="icon">
        </div>
        <div class="b" @click="choose(2)">
          <img src="../assets/page7/b.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[2]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[2]" class="icon">
        </div>
        <div class="c" @click="choose(3)">
          <img src="../assets/page7/c.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[3]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[3]" class="icon">
        </div>
        <div class="d" @click="choose(4)">
          <img src="../assets/page7/d.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[4]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[4]" class="icon">
        </div>
        <img src="../assets/public/done3567.png" @click="done"  class="done"> 
      </div>
      <div class="answer" v-if="real" @click="next">
        <img src="../assets/public/title.png"  class="title">
        <img src="../assets/page7/text.png"  class="text">
      </div>
    </div>
  </div>
</template>

<script>
import right from "@/components/right";
export default {
  name: "page7",
  data() {
    return {
      isRight: false,
      isDone: false,
      real: false,
      chooseState: [0,false,false,false,false],
      score: this.$route.params.score ? this.$route.params.score : 0,
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
        path: "page8",
        name: "page8",
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
.money {
  width: 70.63vw;
  height: 32.5vw;
  position: absolute;
  top: 34.5vw;
  left: 17vw;
  animation: money 0.9s ease forwards;
}
@keyframes money {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  /* 30% {
    transform: scale(0.5)
  } */
  100% {
    transform: scale(1);
    opacity: 1;
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
  top: 54vw;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  width: 100vw;
  height: 63.59vw;
  position: absolute;
  top: 70vw;
  left: 50%;
  transform: translateX(-50%);
}
</style>