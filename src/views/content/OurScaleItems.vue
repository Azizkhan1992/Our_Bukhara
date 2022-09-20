<template>
  <div class="our-scale-container">
    <div class="scale-background"></div>
    <div class="our-scale-content">
        <!-- v-scrollanimation -->
      <div class="item-left scale">
        <img src="@/assets/OurItems/Content/TwoScale/img1.png" alt="" />
        <p>Все новости и возможности для отельеров</p>
      </div>
      <div class="item-center scale" >
        <img src="@/assets/OurItems/Content/TwoScale/img2.png" alt="" />
        <p>Вы турист? Тогда эта информация вам пригодится</p>
      </div>
      <div class="item-right scale" >
        <img src="@/assets/OurItems/Content/TwoScale/img3.png" alt="" />
        <p>
          У вас есть своя туристическая фирма? Мы вам поможем использовать все
          возможности
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import Scroll from '@/directives/scrollPosition'
  import windowScrollPosition from '@/directives/scrollPosMixin'
export default {
  name: "our-scale",
  data() {
    return {
    }
  },
  created(){
    this.scrollAnimate();
  },
  mixins: [windowScrollPosition('scroll'), Scroll('scrollY')],
  methods:{
    scrollAnimate(){
        window.addEventListener('scroll',  ()=>{
            let content = document.getElementsByClassName('scale')
            let contentPosition = content[0].getBoundingClientRect().top;
            let screenPosition = window.innerHeight/1.25;
            if(contentPosition < screenPosition){
                Array.from(content).forEach(element => {
                    element.classList.add('active')
                    
                });
            }
            else{
                Array.from(content).forEach(element => {
                    element.classList.remove('active')
                });
            }
        })
    },
    scrollPos(){
      // mixins: [windowScrollPosition('position')],
    }
  },
  watch: {
    'scrollY': function (val) {
      console.log('y', val)
    }
  }
};
</script>
