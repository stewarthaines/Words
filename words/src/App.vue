<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
  font-size: 24px;
  // font-weight: 100;
}
#app {
  height: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  a {
    // font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
    &.router-link-exact-active {
      // color: #42b983;
    }
  }
}
</style>
