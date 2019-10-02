const subtract = (x, y) => { return x - y }

const subtracter = new Vue({
  el: '#subtracter',
  data: {
    first: 6,
    second: 2
  },
  computed: {
    difference: function () {
      const i = parseInt(this.first)
      const j = parseInt(this.second)
      return `The difference is ${subtract(i, j)}.`
    }
  }
})