<template>
  <div class="our-carousel-container">
    <div class="our-carousel-content">
      <div class="carousel-background"></div>
      <div class="carousel-content">
        <h1>Места, которые нельзя пропустить</h1>
        {{runActive}}
        <p>
          Откройте для себя знаковые и символические места в Узбекистане.
          Позвольте себе вдохновиться
        </p>
        <div class="carousel-slider">
          <div class="carousel-wrapper" :style="move_carousel">
            <div
              class="carousel-items"
              v-for="(slide, idx) in cloned_carousel"
              :key="idx"
              :class="{
                cloned:
                  idx == 0 ||
                  idx == 1 ||
                  idx == 2 ||
                  idx == 6 ||
                  idx == 7 ||
                  idx == 8,
                  'active': idx == checkId
              }"
            >
              <img
                :src="
                  require('@/assets/OurItems/Content/FourCarousel/' +
                    slide.img +
                    '.svg')
                "
                alt=""
              />
              <div class="slide-curtain">
                <span>{{slide.title}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "our-carousel",
  data() {
    return {
      step: 0,
      checkId: 4,
      runActive: false,
      our_carousel: [
        {
          id: 1,
          title: "Водохранилище Чарвак",
          img: "img1",
        },
        {
          id: 2,
          title: "Чорсу",
          img: "img2",
        },
        {
          id: 3,
          title: "Самарканд",
          img: "img3",
        },
      ],
    };
  },
  mounted(){ 
    this.runCarousel()
  },
  computed: {
    move_carousel() {
      return `transform: translateX(${-32.5 + -1 * this.step * 11.11}%)`;
    },
    left_side() {
      return JSON.parse(JSON.stringify(this.our_carousel));
    },
    cloned_carousel() {
      return [...this.left_side, ...this.our_carousel, ...this.left_side];
    },
  },
  methods:{
    runCarousel(){
        setInterval(()=>{
            if(this.step < this.our_carousel.length-1){
            this.checkId++
            this.step++
        }else{
            this.step=0
            this.checkId = 4
        }
        this.runActive = true
    },2000)
        this.runActive = false
    }
  }
};
</script>
