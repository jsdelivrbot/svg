var main = new Vue({
  el: "#app",
  methods: {
    change: function() {
      this.$refs.path.style.stroke = "blue";
      this.$refs.path.style.cursor = "pointer";
      this.$refs.rect.style.cursor = "pointer";
    },
    revert: function() {
      this.$refs.path.style.stroke = "black";
    },
    clicked: function() {
      alert("mouse click detected");
    }
  }
});
