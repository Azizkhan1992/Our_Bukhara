<template>
  <div class="travell-location-container">
    <div class="travell-location-background"></div>
    <div class="travell-location-content">
      <div class="travell-location-items">
        <div class="travell-location-left">
          <h2>Uzbek Travel</h2>
          <h1>Спецпроект Uzbek.Travel</h1>
          <img src="@/assets/OurItems/Content/TenLocation/Group1.svg" alt="" />
          <p>Путешествуй круглый год</p>
          <span
            >Удобная карта локаций, проверенные точки для отдыха по пути, лучшие
            рестораны с традиционной кухней и небанальные
            достопримечательности</span
          >
        </div>
        <div class="travell-location-right">
          <div class="location-right-images">
            <img
              src="@/assets/OurItems/Content/TenLocation/img1.png"
              alt=""
              class="img-one"
            />
            <img
              src="@/assets/OurItems/Content/TenLocation/img2.png"
              alt=""
              class="img-two"
            />
          </div>
          <img src="@/assets/OurItems/Content/TenLocation/Vektor.svg" alt="" />
          <p>Готовые маршруты по Узбекистану</p>
          <span
            >Весенее цветение по всему Узбекистану походы по горным тропам,
            отдых в горячих источниках, кухня и колорит разных областей
            Узбекистана
          </span>
        </div>
      </div>
      <button>Узнать больше</button>
    </div>
  </div>
</template>
<script>
    import Scroll from '@/directives/scrollPosition'
export default {
  name: "travell-location",
  mixins: [Scroll('scrollY')],
  watch: {
    'scrollY' : function(val){
      let content1 = document.getElementsByClassName('img-one')
      let content2 = document.getElementsByClassName('img-two')
      if(val>8700 && val<9600){
        Array.from(content1).forEach(elem =>{
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
    }
  }
};
</script>
