<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Ingredients :msg="info" v-on:generateMenu="generateMenu"></Ingredients>
    <Menu :menu="menu"></Menu>
  </div>
</template>

<script>
import Ingredients from "./components/Ingredients";
import Menu from "./components/Menu";

import axios from 'axios';

export default {
  name: "app",
  components: {
    Ingredients,
    Menu
  },
  data() {
    return {
      info: [],
      menu: []
    };
  },
  mounted() {
    axios.get(process.env.VUE_APP_PIZZA_API + "/ingredients").then(response => {
      this.info = response.data;
      window.console.log(response);
    });
  },
  methods: {
    generateMenu: function() {
      axios.post(process.env.VUE_APP_PIZZA_API+ "/menu", this.info)
      
      .then(response => {
      this.menu = response.data;
      window.console.log(response);
    })
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 