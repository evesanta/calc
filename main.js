var app = new Vue({
  el: '#app',
  data: {
    message: 0,
    botans: ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"],
    temp: 0,
    calcFlag: ""
  },
  methods: {
    input: function (val) {
      if (isNaN(val)) {
        if (this.calcFlag != "") {
          switch (this.calcFlag) {
            case "+":
              this.message = this.message + this.temp
              break
            case "-":
              this.message = this.temp - this.message
              break
            case "*":
              this.message = this.message * this.temp
              break
            case "/":
              this.message = this.temp / this.message
              break
          }
        } else {
          this.temp = this.message
          this.message = 0
          this.calcFlag = val
        }
      } else {
        this.message = this.message * 10 + Number(val)
      }
    }
  },
  computed: {
    getTemp: function () {
      if (this.temp == 0) {
        return ""
      } else {
        return this.temp
      }
    }
  }
})