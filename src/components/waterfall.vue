<template>
    <!-- <nav> -->
    <!-- <headerComponent/> -->
    <!-- </nav> -->
    <!-- <router-view/> -->
    <div>
      <div v-if="top == '예나'" :style="{ backgroundImage: `url(${topBackgroundImage})` }" class="frame top"
        @click="top = 'waterfall'"></div>
      <div v-if="top == 'waterfall'" :style="{ backgroundImage: `url(${topBackgroundImage})` }" class="frame"
        @click="top = '예나'"></div>
      <div v-if="middle == '예나'" :style="{ backgroundImage: `url(${middleBackgroundImage})` }" class="frame middle"
        @click="middle = 'waterfall'"></div>
      <div v-if="middle == 'waterfall'" :style="{ backgroundImage: `url(${middleBackgroundImage})` }" class="frame"
        @click="middle = '예나'"></div>
      <div v-if="bottom == '예나'" :style="{ backgroundImage: `url(${bottomBackgroundImage})` }" class="frame bottom"
        @click="bottom = 'waterfall'"></div>
      <div v-if="bottom == 'waterfall'" :style="{ backgroundImage: `url(${bottomBackgroundImage})` }" class="frame"
        @click="bottom = '예나'"></div>
      <canvas ref="orangeCanvas" class="orange" v-show="orage"></canvas>
      <canvas ref="waterfallCanvas" class="waterfall" v-show="waterfall"></canvas>
    </div>
  
  </template>
  
  <script>
  // import headerComponent from "@/components/headerComponent.vue";
  export default {
    components: {
      // headerComponent
    },
    data() {
      return {
        top: '예나',
        middle: '예나',
        bottom: '예나',
        orage: true,
        waterfall: false,
      }
    },
    computed: {
      topBackgroundImage() {
        console.log(this.top);
        return require(`@/assets/${this.top}_top.png`);
      },
      middleBackgroundImage() {
        console.log(this.middle);
        return require(`@/assets/${this.middle}_middle.png`);
      },
      bottomBackgroundImage() {
        console.log(this.bottom);
        return require(`@/assets/${this.bottom}_bottom.png`);
      }
    },
    mounted() {
      this.setupOrange();
      this.setupWaterfall();
    },
    watch: {
      top() {
        if (this.top === this.middle && this.top === this.bottom) { 
          if (this.top == '예나') {
            this.orage = true
          } 
          if (this.top == 'waterfall') {
            this.waterfall = true
          }
        } else {
          this.orage = false
          this.waterfall = false
        }
      },
      middle() {
        if (this.middle === this.top && this.middle === this.bottom) { 
          if (this.middle == '예나') {
            this.orage = true
          } 
          if (this.middle == 'waterfall') {
            this.waterfall = true
          }
        } else {
          this.orage = false
          this.waterfall = false
        }
      },
      bottom() {
        if (this.bottom === this.middle && this.bottom === this.top) { 
          if (this.bottom == '예나') {
            this.orage = true
          } 
          if (this.bottom == 'waterfall') {
            this.waterfall = true
          }
        } else {
          this.orage = false
          this.waterfall = false
        }
      }
    },
    methods: {
      setupOrange() {
        const canvas = this.$refs.orangeCanvas;
        const context = canvas.getContext('2d');
        const drops = [];
  
        function Drop() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * -500 - 50;
          this.z = Math.random() * 20;
          this.len = map(this.z, 0, 20, 10, 20);
          this.yspeed = map(this.z, 0, 20, 1, 5);
  
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
            const thick = map(this.z, 0, 20, 3, 10);
            context.lineWidth = thick;
            context.strokeStyle = 'rgb(255,165,0)';
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
  
        // function stop() {
        //   console.log('isStop');
        //   cancelAnimationFrame(animationFrameId)
        // }
  
        function setup() {
          // console.log('isGo');
          canvas.width = 30;
          canvas.height = 360;
          for (let i = 0; i < 50; i++) {
            drops.push(new Drop());
          }
          draw();
        }
        setup();
      },
      setupWaterfall() {
        const canvas = this.$refs.waterfallCanvas;
        const context = canvas.getContext('2d');
        const drops = [];
  
        function Drop() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * -500 - 50;
          this.z = Math.random() * 20;
          this.len = map(this.z, 0, 20, 10, 20);
          this.yspeed = map(this.z, 0, 20, 1, 5);
  
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
            const thick = map(this.z, 0, 20, 3, 10);
            context.lineWidth = thick;
            context.strokeStyle = 'rgb(0,0,255)';
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
  
        // function stop() {
        //   console.log('isStop');
        //   cancelAnimationFrame(animationFrameId)
        // }
  
        function setup() {
          // console.log('isGo');
          canvas.width = 110;
          canvas.height = 260;
          for (let i = 0; i < 50; i++) {
            drops.push(new Drop());
          }
          draw();
        }
        setup();
      }
    }
  }
  </script>
  
  <style>
  .orange {
    position: absolute;
    left: 730px;
    top: 680px;
  }
  
  .waterfall {
    position: absolute;
    left: 1100px;
    top: 530px;
  }
  
  /* .top {
    background-image: url('@/assets/orange/${top}_top.png');
  } */
  
  .middle {
    background-image: url('@/assets/예나_middle.png');
  }
  
  .bottom {
    background-image: url('@/assets/예나_bottom.png');
  }
  
  .frame {
    width: 1200px;
    height: 300px;
    background-color: #fff;
    margin: 10px;
    border: 5px solid black;
    background-size: cover;
    background-repeat: no-repeat;
  }
  </style>
  