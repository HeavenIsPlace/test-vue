<template>
  <div id="Carousel">
    <Carousel autoplay :autoplay-speed="setting.speed" :trigger="setting.trigger" :easing="setting.easing" v-model="value1"
    >
        <Carousel-item>
            <div class="demo-carousel">
              1
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              2
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              3
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
              4
            </div>
        </Carousel-item>
    </Carousel>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  Vue.use(VueResource);
  export default {
    name: 'total',
    data () {
      return {
        value1: 0,
        setting: {
          speed: 3000,
          trigger: "hover",
          easing: 'linear'      
        }
      }
    }
  }
</script>
