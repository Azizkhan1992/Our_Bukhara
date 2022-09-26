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
              v-for="item, idx in helperImages"
              :key="idx"
              :id="idx"
              :class="{'img-one' : idx == 4, 'img-two' : idx == 3, 'img-three' : idx == 2, 'img-four' : idx == 1, 'img-five': idx == 0}"
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
    'scrollY' : function (val) {
        let content1 = document.getElementsByClassName('img-one')
        let content2 = document.getElementsByClassName('img-two')
        let content3 = document.getElementsByClassName('img-three')
        let content4 = document.getElementsByClassName('img-four')
        let content5 = document.getElementsByClassName('img-five')
      if(val>5800 && val<7200){
        Array.from(content1).forEach(elem=>{
          elem.classList.add('active')
        })
        Array.from(content2).forEach(elem=>{
          elem.classList.add('active')
        })
        Array.from(content3).forEach(elem=>{
          elem.classList.add('active')
        })
        Array.from(content4).forEach(elem=>{
          elem.classList.add('active')
        })
        Array.from(content5).forEach(elem=>{
          elem.classList.add('active')
        })
      }else{
        Array.from(content1).forEach(elem=>{
          elem.classList.remove('active')
        })
        Array.from(content2).forEach(elem=>{
          elem.classList.remove('active')
        })
        Array.from(content3).forEach(elem=>{
          elem.classList.remove('active')
        })
        Array.from(content4).forEach(elem=>{
          elem.classList.remove('active')
        })
        Array.from(content5).forEach(elem=>{
          elem.classList.remove('active')
        })
      }
    },
  },
};
</script>
