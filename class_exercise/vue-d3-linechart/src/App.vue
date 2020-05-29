<template>
  <div id="app">

    <LineChart v-bind:class="[toggleClass]"/>
 <button v-on:click="play">Play again</button>

  </div>
</template>

<script>
import LineChart from "./components/linechart";
import playBtn from "./assets/playBtn.svg"

export default {
  name: "App",
  components: {
    LineChart
  },

  data() {
    return {
      toggleClass: "ani1"
    };
  },

  methods: {
    play() {
      // toggle classes to animate the line draw
      this.toggleClass == "ani1"
        ? (this.toggleClass = "ani2")
        : (this.toggleClass = "ani1");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  background-color: #f47166;
}

button {
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: url(http://ui-design-coder.com/wp-content/themes/twentyfifteen/css/playBtn.ce805501.svg) no-repeat top left;
  background-size: contain;
  color: transparent;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 8em;
}
button:focus {
  border: none;
}

button#playBtn {
  fill: red;
}

button:focus {
  outline: none;
}
</style>
