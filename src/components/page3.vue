<template>
  <div class="page3">
    <div class="center" v-if="isRight" @click="next">
      <v-right></v-right>
    </div>
    <div class="center" v-else>
      <div>
        <img src="../assets/public/borderbg.png"  class="border-bg">
      </div>
      <div>
        <img src="../assets/page3/topic.png"  class="topic">
        <img src="../assets/page3/elong.png"  class="elong">
        <img src="../assets/page3/ly.png"  class="ly">
      </div>
      <div>
        <div class="a" @click="choose(1)">
          <img src="../assets/page3/a.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[1]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[1]" class="icon">
        </div>
        <div class="b" @click="choose(2)">
          <img src="../assets/page3/b.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[2]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[2]" class="icon">
        </div>
        <div class="c" @click="choose(3)">
          <img src="../assets/page3/c.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[3]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[3]" class="icon">
        </div>
        <img src="../assets/public/done1.png" class="done" @click="done"> 
      </div>
      <div class="answer" v-if="real" @click="next">
        <img src="../assets/public/title.png"  class="title">
        <img src="../assets/page3/answer.png"  class="text">
      </div>
    </div>
  </div>
</template>

<script>
import right from '@/components/right'
export default {
  name: "page3",
  data() {
    return {
      isRight: false,
      isDone: false,
      real :false,
      chooseState: [0,false,false,false,false],
      score: 0,
      answer: 1,
      rightAns: 1 //正确答案
    };
  },
  methods: {
    choose: function (ans) {
      this.chooseState.forEach((v,i) => {
        this.chooseState[i] = false
      });
      this.chooseState.splice(ans,1,true);
      this.answer = ans
      this.isDone = true
    },
    done: function () {
      console.log(this.$route.params.score)
      if (this.isDone) {
        if (this.answer == this.rightAns) {
          this.isRight = true
          this.score = this.score + 10
        }else {
          this.real = true
        }
      }
    },
    next: function () {
      console.log(this.score);      
      this.$router.push({
        path:'page4',
        name: "page4",
        params: {
          score: this.score
        }
      })
    }
  },
  components: {
    'v-right': right
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
.elong {
  width: 38.44vw;
  height: 24.38vw;
  position: absolute;
  top: 47vw;
  left: 12vw;
  animation: elong 0.9s ease-out forwards;
}
.ly {
  width: 35.31vw;
  height: 25vw;
  position: absolute;
  top: 47.3vw;
  left: 55vw;
  animation: ly 0.9s ease-out forwards;
}
.icon {
  width: 4.22vw;
  height: 4.22vw;
  position: absolute;
  top: -0.5vw;
  left: -0.5vw;
}
.a {
  width: 64.06vw;
  height: 11.56vw;
  position: absolute;
  top: 118vw;
  left: 9vw;
}
.a .itema {
  width: 64.06vw;
  height: 11.56vw;
}
.a img:nth-child(1) {
  width: 64.06vw;
  height: 11.56vw;
}
.b {
  width: 64.06vw;
  height: 11.56vw;
  position: absolute;
  top: 132vw;
  left: 9vw;
}
.b img:nth-child(1) {
  width: 64.06vw;
  height: 11.56vw;
}
.c {
  width: 64.06vw;
  height: 11.56vw;
  position: absolute;
  top: 146vw;
  left: 9vw;
}
.c img:nth-child(1) {
  width: 64.06vw;
  height: 11.56vw;
}
.done {
  width: 15.78vw;
  height: 39.06vw;
  position: absolute;
  top: 119vw;
  left: 75.5vw;
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
  top: 53vw;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  width: 68.28vw;
  height: 59.37vw;
  position: absolute;
  top: 78vw;
  left: 50%;
  transform: translateX(-50%);
}
@keyframes elong {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(4.5vw);
  }
}
@keyframes ly {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-4.5vw);
  }
}
</style>
