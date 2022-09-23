<template>
  <div class="hot-now-container">
    <div class="hot-now-background"></div>
    <div class="hot-now-content">
      <div class="hot-now-left">
        <h2>Сейчас в разгаре...</h2>
        <p>Шарк Тароналари</p>
        <span
          >Международный музыкальный фестиваль «Шарк Тароналари» проводится в
          Самарканде с 1997 года по инициативе Президента Узбекистана И. А.
          Каримова. Организуется на регулярной основе, с периодичностью раз в
          два года. Заявленными целями и задачами музыкального форума является
          широкая популяризация, сохранение и развитие лучших достижений
          национального музыкального искусства; воспитание молодого поколения в
          духе преемственности национальным традициям; дальнейшее расширение
          международных творческих связей. Организаторами фестиваля выступают
          Министерство культуры и спорта республики Узбекистан, Национальная
          телерадиокомпания Узбекистана, Союз композиторов Узбекистана и
          Хокимият (администрация) Самаркандской области. Конкурс проводится при
          поддержке ЮНЕСКО.
          <br/>

          <br/>
          Количество стран-участниц фестиваля с каждым годом
          увеличивается: если на первом фестивале в 1997 году выступили
          представители из 31 страны, то в 2009 году — уже 50 стран.</span
        >
        <button>Подробнее</button>
      </div>
      <div class="hot-now-right">
        <div class="right-container">
            <div class="right-carousel-container">
                <div class="right-carousel-wrapper" :class="{'active' : carouselLeft}">
                    <div class="carousel-items" v-for="item, idx in clonedCarousel" :key="idx">
                    <img :src="require('@/assets/OurItems/Content/EightHot/' + item.img)" alt="">
                    </div>
                </div>
            </div>
            <img src="@/assets/OurItems/Content/EightHot/image.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hot-now-travell",
  data(){
    return{
        hotCarousel: [
            {
                id: 1,
                img: 'img1.jpg',
            },
            {
                id: 2,
                img: 'img2.jpg'
            },
            {
                id: 3,
                img: 'img3.png'
            }
        ],
        checkId: 4,
        carouselLeft: false
    }
  },
  mounted(){
    setInterval(() =>{
        this.runCarousel()
        this.carouselLeft = true
    },4000)
  },
  computed:{
    cloneCarousel(){
        return JSON.parse(JSON.stringify(this.hotCarousel));
    },
    clonedCarousel(){
        return [...this.cloneCarousel, ...this.hotCarousel, ...this.cloneCarousel]
    }
  },
  methods:{
    runCarousel(){
        setTimeout(() => {
            let item = this.hotCarousel.shift();
            this.hotCarousel.push(item)

            this.carouselLeft = false
        }, 2000)
    }
  }
};
</script>
