<template>
  <div class="cities-art-container">
    <div class="cities-art-background"></div>
    <div class="cities-art-content">
      <h1>Города искусств</h1>
      <p>
        Испытайте красоту городов, символизирующих узбекскую историю, искусство
        и культуру
      </p>
      <div class="cities-art-wrapper">
        <div
          class="cities-art-items"
          v-for="(city, idx) in clonedCities"
          :key="idx"
          :id="idx"
          :class="{
            'cloned-one': idx == 0 || idx == 1,
            'cloned-two' : idx == 2 || idx == 3,
            'real-items-one': idx == 4 || idx == 5,
            'real-items-two' : idx == 6 || idx == 7,
            'cloned-three' : idx == 8 || idx == 9,
            'cloned-four' : idx == 10 || idx == 11
          }"
        >
          <img
            :src="
              require('@/assets/OurItems/Content/NineCities/' +
                city.img +
                '.png')
            "
            alt=""
          />
          <p>{{ city.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Scroll from '@/directives/scrollPosition'
export default {
  name: "cities-art",
  data() {
    return {
      citiesArt: [
        {
          id: 1,
          title: "Шахизинда",
          img: "img1",
        },
        {
          id: 2,
          title: "Гробница Тамерлана",
          img: "img2",
        },
        {
          id: 3,
          title: "Ичан  кала",
          img: "img3",
        },
        {
          id: 4,
          title: "Юрта Каракалпакистан",
          img: "img4",
        },
      ],
    };
  },
  mixins: [Scroll('scrollY')],
  computed: {
    clone() {
      return JSON.parse(JSON.stringify(this.citiesArt));
    },
    clonedCities() {
      return [...this.clone, ...this.citiesArt, ...this.clone];
    },
  },
  watch: {
    'scrollY': function(val){
        let content1 = document.getElementsByClassName('cloned-one')
        let content2 = document.getElementsByClassName('cloned-two')
        let content3 = document.getElementsByClassName('real-items-one')
        let content4 = document.getElementsByClassName('real-items-two')
        let content5 = document.getElementsByClassName('cloned-three')
        let content6 = document.getElementsByClassName('cloned-four')
        // console.log(val)
        if(val>7650 && val<8500){
            Array.from(content1).forEach(elem=>{
                elem.classList.add('active')
            })
            Array.from(content2).forEach(elem=>{
                elem.classList.add('active')
            })
        }else{
            Array.from(content1).forEach(elem=>{
                elem.classList.remove('active')
            })
            Array.from(content2).forEach(elem=>{
                elem.classList.remove('active')
            })
        }
        if(val>7900 && val<8800){
            Array.from(content3).forEach(elem=>{
                elem.classList.add('active')
            })
            Array.from(content4).forEach(elem=>{
                elem.classList.add('active')
            })
        }else{
            Array.from(content3).forEach(elem=>{
                elem.classList.remove('active')
            })
            Array.from(content4).forEach(elem=>{
                elem.classList.remove('active')
            })
        }
        if(val>8200 && val<9100){
            Array.from(content5).forEach(elem=>{
                elem.classList.add('active')
            })
            Array.from(content6).forEach(elem=>{
                elem.classList.add('active')
            })
        }else{
            Array.from(content5).forEach(elem=>{
                elem.classList.remove('active')
            })
            Array.from(content6).forEach(elem=>{
                elem.classList.remove('active')
            })
        }
    }
  }
};
</script>
