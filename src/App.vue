<template>
  <div class="half-width" id="div1">
    <img :src="landing_img_path" alt="">
  </div>
  <div class="half-width" id="div2">
    <introduceComponent />
  </div>
</template>

<script>
import introduceComponent from "@/components/introduceComponent.vue";
export default {
  data() {
    return{
      landing_img_path: require('@/assets/prefer_choi_96.jpg')
    }
  },
  components: {
    introduceComponent
  }
}
</script>

<style>
.half-width {
    width: 50%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; 
}

#div1 img {
    object-fit: cover;  /* 이미지가 div를 꽉 채우도록 */
}

#div2 {
    display: flex;
    flex-direction: column;
}

</style>
