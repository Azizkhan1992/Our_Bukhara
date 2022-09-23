<template>
  <div class="travell-helper-container">
    <div class="travell-helper-background"></div>
    <div class="travell-helper-content">
      <h1>Посетите Узбекистан с помощником</h1>
      <p>
        Установите наше официальное приложение-помощник при путеществии по
        Узбекистану
      </p>
      <div class="our-travell-helper">
        <div class="helper-left-side">
          <h2>Ваш личный помощник</h2>
          <span
            >Установите наше официальное приложение-помощник при путеществии по
            Узбекистану. Установите наше официальное приложение-помощник при
            путеществии по Узбекистану. Установите наше официальное
            приложение-помощник при путеществии по Узбекистану. Установите наше
            официальное приложение-помощник при путеществии по
            Узбекистану.</span
          >
          <div class="left-items">
            <img
              src="@/assets/OurItems/Content/SevenHelper/frame1.png"
              alt=""
            />
            <img
              src="@/assets/OurItems/Content/SevenHelper/frame2.png"
              alt=""
            />
          </div>
        </div>
        <div class="helper-right-side">
          <div class="right-items">
            <img
              :src="
                require('@/assets/OurItems/Content/SevenHelper/' + item.img)
              "
              alt=""
              v-for="item in helperImages"
              :key="item.id"
              :class="{'img-one' : item.id == 5, 'img-two' : item.id == 4, 'img-three' : item.id == 3, 'img-four' : item.id == 2, 'img-five': item.id == 1}"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Scroll from "@/directives/scrollPosition";
export default {
  name: "travell-helper",
  data() {
    return {
      helperImages: [
        {
          id: 1,
          img: "visitUzb1.png",
        },
        {
          id: 2,
          img: "visitUzb2.png",
        },
        {
          id: 3,
          img: "visitUzb3.png",
        },
        {
          id: 4,
          img: "visitUzb4.png",
        },
        {
          id: 5,
          img: "visitUzb5.png",
        },
      ],
    };
  },
  mixins: [Scroll("scrollY")],
  watch: {
    scrollY: function (val) {
        let content1 = document.querySelector('.img-one')
        let content2 = document.querySelector('.img-two')
        let content3 = document.querySelector('.img-three')
        let content4 = document.querySelector('.img-four')
        let content5 = document.querySelector('.img-five')
      if(val>5800 && val<7200){
        content1.classList.add('active')
        content2.classList.add('active')
        content3.classList.add('active')
        content4.classList.add('active')
        content5.classList.add('active')
      }else{
        content1.classList.remove('active')
        content2.classList.remove('active')
        content3.classList.remove('active')
        content4.classList.remove('active')
        content5.classList.remove('active')
      }
    },
  },
};
</script>
