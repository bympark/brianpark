<template>
  <div id='navbar'>
    <div id='header'>
      <h1>Brian Park</h1>
    </div>
    <div id='links'>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Profile' }">Profile</router-link>
      <router-link :to="{ name: 'Projects' }">Projects</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frame',
  data() {
    return {
      msg: 'App frame',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  position: absolute;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #c7c7c7;
}
#header {
  position: relative;
  width: 50%;
  height: 100%;
  align-content: flex-start;
  text-align: left;
  padding-left: 10%;
  vertical-align: middle;
}
#links {
  position: relative;
  width: 50%;
  height: 100%;
  align-content: flex-end;
  text-align: right;
  padding-right: 10%;
  vertical-align: middle;
}
a {
  padding-right: 10px;
  font-size: 16pt;
  color: #555;
}
</style>
