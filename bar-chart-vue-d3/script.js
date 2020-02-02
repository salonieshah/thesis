/* global Vue */

var app = new Vue({
  // This is the id of our referenced div-element
  // only this element and everything in it
  // will be connected to the data
  el: '#bars',
  data: { // Has to be called data
    chartTitle: "Counting in German",
    svgHeight: 500,
    svgWidth: 800,
    data: [
      { name: "eins", val: 1 },
      { name: "zwei", val: 2 },
      { name: "drei", val: 3 },
      { name: "vier", val: 4 },
      { name: "fünf", val: 5 }
    ]
  },
  // computed
})
