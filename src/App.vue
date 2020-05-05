<template>
  <div id="app">
    <Snackbar />
    <router-view/>
  </div>
</template>
<script>

import Snackbar from './components/Snackbar.vue';

export default {
  components: {
    Snackbar,
  },
};
</script>

<style lang="scss">
body{
  overflow: hidden;
  background: #e9ecef;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
