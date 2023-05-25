<template>
    <div>
      <div ref="canvas"></div>
    </div>
    
  </template>
  
  <script>
  import p5 from 'p5';
  
  
  export default {
    data() {
      return {
        p5: null,
        sketch: null,
      };
    },
    mounted() {
      this.sketch = (p) => {
        p.setup = () => {
          p.createCanvas(400, 400)
          p.background(0)
        };
        p.draw = () => {
          p.rectMode(p.CORNERS)
          p.fill(p.random(0,255),p.random(0,255),p.random(0,255),40)
          p.rect(p.random(0,400),p.random(0,400),p.random(0,400),p.random(0,400))
        };
      };
      this.p5 = new p5(this.sketch, this.$refs.canvas);
    },
    beforeUnmount() {
      this.p5.remove();
    },
  };
  </script>