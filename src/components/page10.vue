<template>
  <div class="page10">
    <div class="center" v-if="isRight" @click="next">
      <v-right></v-right>
    </div>
    <div class="center" v-else>
      <div>
        <img src="../assets/public/borderbg.png"  class="border-bg">
      </div>
      <div>
        <img src="../assets/page10/topic.png"  class="topic">
        <div class="translate">
          <div class="rotate">
            <img src="../assets/page10/bigger.png"  class="bigger">
          </div>
        </div>
      </div>
      <div>
        <div class="a" @click="choose(1)">
          <img src="../assets/page10/a.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[1]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[1]" class="icon">
        </div>
        <div class="b" @click="choose(2)">
          <img src="../assets/page10/b.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[2]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[2]" class="icon">
        </div>
        <div class="c" @click="choose(3)">
          <img src="../assets/page10/c.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[3]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[3]" class="icon">
        </div>
        <div class="d" @click="choose(4)">
          <img src="../assets/page10/d.png">
          <img src="../assets/public/icon.png" v-if="!chooseState[4]" class="icon">
          <img src="../assets/public/choosed.png" v-if="chooseState[4]" class="icon">
        </div>
        <img src="../assets/public/done8.png"  @click="done" class="done"> 
      </div>
      <div class="answer" v-if="real" @click="next">
        <img src="../assets/public/title.png"  class="title">
        <img src="../assets/page10/text.png"  class="text">
      </div>
    </div>
  </div>
</template>

<script>
import right from "@/components/right";
export default {
  name: "page10",
  data() {
    return {
      isRight: false,
      isDone: false,
      real: false,
      chooseState: [0, false, false, false, false],
      score: this.$route.params.score ? this.$route.params.score : 0,
      answer: 1,
      rightAns: 3
    };
  },
  methods: {
    choose: function(ans) {
      this.chooseState.forEach((v, i) => {
        this.chooseState[i] = false;
      });
      this.chooseState.splice(ans, 1, true);
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
        path: "page11",
        name: "page11",
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
  height: 112.34vw;
  position: absolute;
  top: 0;
  left: 0;
}
.bigger {
  width: 35.47vw;
  height: 31.72vw;
  position: absolute;
  top: 0vw;
  left: 0vw;
  /* top: 42vw;
  left: 30.5vw; */
  animation: bigger 1.3s linear forwards;
  /* transform-origin: -20vw -20vw; */
}
.rotate {
  width: 30vw;
  height: 30vw;
  position: absolute;
  top: 0vw;
  left: 0vw;
  animation: rotate 1.3s linear forwards;
  transform-origin: 30% 30%;
}
.translate {
  position: absolute;
  top: 50.5vw;
  left: 42vw;
  animation: translate 0.6s 0.7s linear forwards;
}
@keyframes rotate {
  0% {
  }
  100% {
    transform: rotate(540deg);
  }
}
@keyframes translate {
  0% {
  }
  100% {
    transform: translate(6.5vw, 6vw);
  }
}
@keyframes bigger {
  0% {
  }
  100% {
    transform: rotate(-540deg);
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
  height: 52.19vw;
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
  top: 58vw;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  width: 100vw;
  height: 79.22vw;
  position: absolute;
  top: 71vw;
  left: 50%;
  transform: translateX(-50%);
}
</style>