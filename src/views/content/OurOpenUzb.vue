<template>
  <div class="open-container">
    <div class="open-content">
      <h1>Открой для себя Узбекистан</h1>
      <div class="open-wrapper">
        <div
          v-for="open in open_UZ"
          :key="open.id"
          :id="'item' + open.id"
          :class="{
            'header-items': open.id == 1 || open.id == 2 || open.id == 3,
            'same-items': open.id == 4 || open.id == 5,
            'center-items': open.id == 8 || open.id == 9 || open.id == 10,
            'footer-item': open.id == 11,
          }"
        >
    <img :src="require('@/assets/OurItems/Content/ThreeOpen/' + open.img + '.jpg')" alt="">
    <p>{{open.title}}</p>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Scroll from '@/directives/scrollPosition'
export default {
  name: "our-open",
  data() {
    return {
      open_UZ: [
        {
          id: 1,
          title: "Сельский туризм",
          img: "img1",
        },
        {
          id: 2,
          title: "Маршруты для путешествий на авто",
          img: "img2",
        },
        {
          id: 3,
          title: "Отдохнуть и подлечиться",
          img: "img3",
        },
        {
          id: 4,
          title: "Гастрономический туризм",
          img: "img4",
        },
        {
          id: 5,
          title: "Активный отдых",
          img: "img5",
        },
        {
          id: 6,
          title: "Культура",
          img: "img6",
        },
        {
          id: 7,
          title: "Базы отдыха и кемпинга",
          img: "img7",
        },
        {
          id: 8,
          title: "Музеи",
          img: "img8",
        },
        {
          id: 9,
          title: "Традиции",
          img: "img9",
        },
        {
          id: 10,
          title: "Внутренние рейсы",
          img: "img10",
        },
        {
          id: 11,
          title: "Природа",
          img: "img11",
        },
      ],
    };
  },
  mixins: [Scroll('scrollY')],

  watch: {
    'scrollY': function(val){
      // console.log(val)
        let content1 = document.getElementsByClassName('header-items');
        let content2 = document.getElementsByClassName('same-items')
        let content3 = document.getElementById('item6')
        let content4 = document.getElementById('item7')
        let content5 = document.getElementsByClassName('center-items')
        let content6 = document.getElementsByClassName('footer-item')
        // console.log(content3)
        if(750<val && 1700 > val){
            Array.from(content1).forEach(element => {
                    element.classList.add('active')
                });
        }else{
            Array.from(content1).forEach(element => {
                    element.classList.remove('active')
                });
        }
        if(900<val && 2000 > val){
            Array.from(content2).forEach(element => {
                    element.classList.add('active')
                });
        }else{
            Array.from(content2).forEach(element => {
                    element.classList.remove('active')
                });
        }
        if(1350<val && 2450 > val){
          content3.classList.add('active')
          content4.classList.add('active')
        }else{
          content3.classList.remove('active')
          content4.classList.remove('active')
        }
        if(1750<val && 3000 > val){
            Array.from(content5).forEach(element => {
                    element.classList.add('active')
                });
        }else{
            Array.from(content5).forEach(element => {
                    element.classList.remove('active')
                });
        }
        if(2275<val && 3250 > val){
            Array.from(content6).forEach(element => {
                    element.classList.add('active')
                });
        }else{
            Array.from(content6).forEach(element => {
                    element.classList.remove('active')
                });
        }
    }
  }
};
</script>
