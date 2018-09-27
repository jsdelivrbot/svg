/*          Author: Richard Myatt
            Date: 20 September 2018

            Revised: 22 September 2018 - Anchor elements removed.
            Mouse events improved.  Clickable area increased.

            An svg counter similar to that used by SL.  Because
            this is written as an svg it can easily be resized.

            Please contrast this counter with those previously
            posted here at:
            https://code.sololearn.com/Wn6r7eQ3kwli/#html and
            https://code.sololearn.com/WsX7DwcDjvdt/#html
*/

// horizontal counter component
var HCounter = {
  template: "#horizontal-counter",
  data: function() {
      return {
        output: "0",  // counter output
        count: 0      // current count
      };
    },
  methods: {
    // function to increment counter
    inc: function() {
      this.count += 1;
      if(this.count > 0) {
        this.output = "+" + this.count;
      } else {
        this.output = this.count;
      }
    },
    // function to decrement counter
    dec: function() {
      this.count -= 1;
      if(this.count > 0) {
        this.output = "+" + this.count;
      } else {
        this.output = this.count;
      }
    },
    // mouse enters up arrow area
    enterUpArea: function() {
      this.$refs.upArrowPath.style.stroke = "blue";
      this.$refs.upArrowRect.style.cursor = "pointer";
      this.$refs.upArrowPath.style.cursor = "pointer";
    },
    // mouse leaves up arrow area
    leaveUpArea: function() {
      this.$refs.upArrowPath.style.stroke = "black";
    },
    // mouse enters down arrow area
    enterDownArea: function() {
      this.$refs.downArrowPath.style.stroke = "blue";
      this.$refs.downArrowRect.style.cursor = "pointer";
      this.$refs.downArrowPath.style.cursor = "pointer";
    },
    // mouse leaves down arrow area
    leaveDownArea: function() {
      this.$refs.downArrowPath.style.stroke = "black";
    }
  }
};

// vertical counter component
var VCounter = {
  template: "#vertical-counter",
  data: function() {
      return {
        output: "0",  // counter output
        count: 0      // current count
      };
    },
  methods: {
    // function to increment counter
    inc: function() {
      this.count += 1;
      if(this.count > 0) {
        this.output = "+" + this.count;
      } else {
        this.output = this.count;
      }
    },
    // function to decrement counter
    dec: function() {
      this.count -= 1;
      if(this.count > 0) {
        this.output = "+" + this.count;
      } else {
        this.output = this.count;
      }
    },
    // mouse enters up arrow area
    enterUpArea: function() {
      this.$refs.upArrowPath.style.stroke = "blue";
      this.$refs.upArrowRect.style.cursor = "pointer";
      this.$refs.upArrowPath.style.cursor = "pointer";
    },
    // mouse leaves up arrow area
    leaveUpArea: function() {
      this.$refs.upArrowPath.style.stroke = "black";
    },
    // mouse enters down arrow area
    enterDownArea: function() {
      this.$refs.downArrowPath.style.stroke = "blue";
      this.$refs.downArrowRect.style.cursor = "pointer";
      this.$refs.downArrowPath.style.cursor = "pointer";
    },
    // mouse leaves down arrow area
    leaveDownArea: function() {
      this.$refs.downArrowPath.style.stroke = "black";
    }
  }
};

// main Vue.js application
new Vue({
  el: "#counter-app",
  components: {
    "horizontal-counter": HCounter,
    "vertical-counter": VCounter
  }
});
