<template>
    <div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.setup();
    },
    methods: {
      setup() {
        const canvas = this.$refs.canvas;
        const context = canvas.getContext('2d');
        const drops = [];
  
        function Drop() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * -500 - 50;
          this.z = Math.random() * 20;
          this.len = map(this.z, 0, 20, 10, 20);
          this.yspeed = map(this.z, 0, 20, 1, 20);
  
          this.fall = function () {
            this.y += this.yspeed;
            const grav = map(this.z, 0, 20, 0, 0.2);
            this.yspeed += grav;
            if (this.y > canvas.height) {
              this.y = Math.random() * -200 - 100;
              this.yspeed = map(this.z, 0, 20, 4, 10);
            }
          };
  
          this.show = function () {
            const thick = map(this.z, 0, 20, 1, 3);
            context.lineWidth = thick;
            context.strokeStyle = 'rgb(138, 43, 226)';
            context.beginPath();
            context.moveTo(this.x, this.y);
            context.lineTo(this.x, this.y + this.len);
            context.stroke();
          };
        }
  
        function map(value, start1, stop1, start2, stop2) {
          return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
        }
  
        function draw() {
          context.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < drops.length; i++) {
            drops[i].fall();
            drops[i].show();
          }
          requestAnimationFrame(draw);
        }
  
        function setup() {
          canvas.width = 640;
          canvas.height = 360;
          for (let i = 0; i < 50; i++) {
            drops.push(new Drop());
          }
          draw();
        }
  
        setup();
      }
    }
  };
  </script>
  