const add = (x, y) => { return x + y }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'People per course',
    firstNumber: 5,
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = 2
      return `${this.guest} is ${add(i, j)}.`
    }
  }
})