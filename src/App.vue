<template>
  <div id="app">
    <div id="nav">
      <router-link to="/new">Новая форма (работает хорошо)</router-link>|
      <router-link to="/old">Старая форма (работает плохо)</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

#app {
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}
</style>
