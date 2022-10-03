<template>
  <div class="carousel-slider-container">
    <div class="carousel-slider-content">
        <div class="left-btn" @click="run_left">
            <img src="@/assets/OurItems/Content/SixtenCarousel/Vector.svg" alt="">
        </div>
      <div class="carousel-slider-wrapper"
      :style="{transform: `translateX(${-34.5 + -1 * step * 10.2}%)`, transition: 'transform 1s ease-in'}"
      >
        <div
          class="carousel-slider-items"
          v-for="(item, idx) in cloned_items"
          :key="idx"
          :id="idx"
        >
        <!-- <p>{{step}}</p> -->
          <img
            :src="
              require('@/assets/OurItems/Content/SixtenCarousel/' + item.img)
            "
            alt=""
          />
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="right-btn" @click="run_right">
        <img src="@/assets/OurItems/Content/SixtenCarousel/Vector1.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "carousel-slider",
  data() {
    return {
      carousel_slider: [
        {
          id: 1,
          img: "img1.png",
          title: "ТАРАҚҚИЁТ СТРАТЕГИЯСИ МАРКАЗИ",
        },
        {
          id: 2,
          img: "img2.png",
          title: "",
        },
        {
          id: 3,
          img: "img3.png",
          title: "Ўзбекистон Республикаси Олий Мажлиси Қонунчилик палатаси",
        },
      ],
      step: 0,
      checkId: false
    };
  },
  computed: {
    move_carousel() {
      return `transform: translateX(-32.5%)`;
    },
    cloned() {
      return JSON.parse(JSON.stringify(this.carousel_slider));
    },
    cloned_items() {
      return [...this.cloned, ...this.carousel_slider, ...this.cloned];
    },
  },
  methods:{
    run_left(){
            if(this.step< this.carousel_slider.length-1){
            this.step++
            this.checkId = false
        }else{
            this.step=0
            this.checkId = false
        }
  },
  run_right(){
    if(this.step > 0){
        this.step--
    }else{
        this.step = this.carousel_slider.length-1
    }
  }
  }
};
</script>
