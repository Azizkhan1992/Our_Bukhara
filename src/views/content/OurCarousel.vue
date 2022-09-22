<template>
  <div class="our-carousel-container">
    <div class="our-carousel-content">
      <div class="carousel-background"></div>
      <div class="carousel-content">
        <h1>Места, которые нельзя пропустить</h1>
        <p>
          Откройте для себя знаковые и символические места в Узбекистане.
          Позвольте себе вдохновиться
        </p>
        <div class="carousel-slider">
          <div class="carousel-wrapper" :style="{transform: `translateX(${-10.82 * left_side.length + -1 * step * 11.11}%)` , width: `${wrapper_width}%`}">
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
                active: idx == checkId,
                center: idx == checkId - 1,
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
                <span>{{ slide.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="dot-wrapper">
          <button v-for="btn, idx in our_carousel" :key="btn.id"
          :class="{'active' : btn.id == checkBtn}"
          @click="dotMover(idx)"
          ></button>
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
      checkBtn: 1,
      checkId: 4,
      runActive: false,
      wrapper_width: 0,
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
  mounted() {
    this.wrapper_width = 31.89 * this.cloned_carousel.length
    setInterval(() => {
      this.runCarousel();
    }, 4000);
  },
  computed: {
    move_carousel() {
      return `transform: translateX(${-32.5 + -1 * this.step * 11.11}%)`;
    },
    set_width(){
      return `width: ${this.wrapper_width}%`
    },
    left_side() {
      return JSON.parse(JSON.stringify(this.our_carousel));
    },
    cloned_carousel() {
      return [...this.left_side, ...this.our_carousel, ...this.left_side];
    },
  },
  methods: {
    runCarousel() {
      this.runActive = true;
      setTimeout(() => {
        if (this.step < this.our_carousel.length - 1) {
          this.checkId++;
          this.step++;
          this.checkBtn++
        } else {
          this.step = 0;
          this.checkId = 4;
          this.checkBtn=1
        }
        this.runActive = false;
      }, 2000);
    },
    dotMover(e){
      this.step = e;
      this.checkId = this.left_side.length+1 + e
      this.checkBtn = e+1
    }
  },
};
</script>
