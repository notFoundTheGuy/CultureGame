<template>
  <div class="score">
    <div class="center">
        <div class="loading" v-if="loading">
            <img src="../assets/score/text.png"  class="text">
            <img src="../assets/score/loading.png"  class="loading-icon">
        </div>
        <div class="score" v-else>
            <div>
                <p class="score-num">{{score}}</p>
                <img src="../assets/score/bg1.png" v-if="bgflag == 1" class="topic">
                <img src="../assets/score/bg2.png" v-if="bgflag == 2" class="topic">
                <img src="../assets/score/bg3.png" v-if="bgflag == 3" class="topic">
                <router-link to="page3">
                  <img src="../assets/score/again.png" alt="" class="again">
                </router-link>
                <img src="../assets/score/share.png" alt="" @click="share" class="share">
                <div class="arrow">
                  <img src="../assets/score/arrow.png" >
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "score",
  data() {
    return {
      loading: true,
      bgflag: 1,
      score: this.$route.params.score ? this.$route.params.score : 0
    };
  },
  created: function() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
    if (this.score >= 80) {
      this.bgflag = 1;
    } else if (this.score <= 60) {
      this.bgflag = 3;
    } else {
      this.bgflag = 2;
    }
  },
  methods: {
    share: function() {
      alert("分享");
    }
  }
};
</script>

<style scoped>
.score-num {
  width: 50vw;
  text-align: center;
  position: absolute;
  top: 15vw;
  left: 15vw;
  font-size: 5rem;
  color: #ec9200;
}
.text {
  width: 80.47vw;
  height: 30.16vw;
}
.loading-icon {
  width: 56.88vw;
  height: 56.41vw;
  margin-top: 7vw;
  animation: loading 2.5s infinite linear;
}
.topic {
  width: 100vw;
  height: 139.22vw;
  margin-bottom: 10vw;
}
.again {
  width: 48.91vw;
  height: 14.53vw;
  position: absolute;
  top: 137vw;
  left: 2vw;
}
.share {
  width: 51.09vw;
  height: 14.53vw;
  position: absolute;
  top: 137vw;
  left: 48vw;
}
.arrow {
  width: 9.22vw;
  height: 11.25vw;
  position: absolute;
  top: 49vw;
  left: 14vw;
}
.arrow img {
  width: 9.22vw;
  height: 11.25vw;
}
@keyframes loading {
  0% {
    transform: rotate();
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>