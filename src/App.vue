<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #00CAF8;
  height: 100vh;
}
.center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.icon {
  width: 4.22vw;
  height: 4.22vw;
  position:absolute;
  top: -0.5vw;
  left:-0.5vw;
}
</style>
