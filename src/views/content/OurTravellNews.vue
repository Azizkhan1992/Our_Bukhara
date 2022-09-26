<template>
  <div class="travell-news-container">
    <div class="travell-news-background"></div>
    <div class="travell-news-content">
      <h1>Новости Узбекистана</h1>
      <p>
        Читайте новости Узбекистана со всех региональных управлений Министерства
      </p>
      <div class="travell-news-wrapper">
        <div class="news-wrapper-top">
          <div
            class="top-items"
            v-for="(item, idx) in news"
            :key="idx"
            :class="{
              'item-right': idx == 0,
              'left-items': idx == 1 || idx == 2,
            }"
          >
            <div class="top-item-img">
                <img :src="require('@/assets/OurItems/Content/TwelweNews/' + item.img + '.png')" alt="">
            </div>
            <div class="top-item-title">
                <h2>{{item.title}}</h2>
                <p>{{item.descript}}</p>
                <div class="news-location">
                    <img src="@/assets/OurItems/Content/TwelweNews/Vector.svg" alt="">
                    <span>{{item.location}}</span>
                </div>
                <div class="news-footer">
                    <img src="@/assets/OurItems/Content/TwelweNews/Vector1.svg" alt="">
                    <p>{{item.date}}</p>
                    <img src="@/assets/OurItems/Content/TwelweNews/Vector2.svg" alt="">
                    <span>{{item.views}} посмотрели</span>
                </div>
            </div>
          </div>
        </div>
        <div class="news-wrapper-bottom">
            <div class="news-bottom-item right-item">
                <img src="@/assets/OurItems/Content/TwelweNews/img4.png" alt="">
                <h3>Узбекистан – Азербайджан: подписана, программа сотрудничества  в сфере туризма</h3>
                <div class="news-bottom-title">
                    <img src="@/assets/OurItems/Content/TwelweNews/Vector1.svg" alt="">
                    <span>20 июля 2022</span>
                </div>
            </div>
            <div class="news-bottom-item right-item">
                <img src="@/assets/OurItems/Content/TwelweNews/img4.png" alt="">
                <h3>Узбекистан – Азербайджан: подписана, программа сотрудничества  в сфере туризма</h3>
                <div class="news-bottom-title">
                    <img src="@/assets/OurItems/Content/TwelweNews/Vector1.svg" alt="">
                    <span>20 июля 2022</span>
                </div>
            </div>
            <div class="news-bottom-item left-item">
                <img src="@/assets/OurItems/Content/TwelweNews/img4.png" alt="">
                <h3>Узбекистан – Азербайджан: подписана, программа сотрудничества  в сфере туризма</h3>
                <div class="news-bottom-title">
                    <img src="@/assets/OurItems/Content/TwelweNews/Vector1.svg" alt="">
                    <span>20 июля 2022</span>
                </div>
            </div>
            <div class="news-bottom-item left-item">
                <img src="@/assets/OurItems/Content/TwelweNews/img4.png" alt="">
                <h3>Узбекистан – Азербайджан: подписана, программа сотрудничества  в сфере туризма</h3>
                <div class="news-bottom-title">
                    <img src="@/assets/OurItems/Content/TwelweNews/Vector1.svg" alt="">
                    <span>20 июля 2022</span>
                </div>
            </div>
            <div class="news-bottom-footer">
                <input type="text" placeholder="Enter your email">
                <button>Отправить</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Scroll from '@/directives/scrollPosition'
export default {
  name: "travell-news",
  data() {
    return {
      news: [
        {
          id: 1,
          title:
            "Узбекистан – Азербайджан: подписана, программа сотрудничества  в сфере туризма",
          descript:
            "20 июня 2022 года Министерство туризма и культурного наследия, Дирекция Чарвакской туристско-рекреационной зоны...",
          location: "Ташкент",
          img: "img1",
          date: "20 июля 2022",
          views: 3,
        },
        {
          id: 2,
          title:
            "Культура путешествия: Был организован пресс-тур в Бостанлыкский район",
          descript:
            "20 июня 2022 года Министерство туризма и культурного наследия, Дирекция Чарвакской...",
          location: "Ташкент",
          img: "img2",
          date: "20 июля 2022",
          views: 3,
        },
        {
          id: 3,
          title:
            "Группа ведущих СМИ Узбекистана изучают туристический потенциал Азербайджана",
          descript:
            "20 июня 2022 года Министерство туризма и культурного наследия, Дирекция Чарвакской туристско-рекреационной зоны",
          location: "Ташкент",
          img: "img3",
          date: "20 июля 2022",
          views: 3,
        },
      ],
    };
  },
  mixins: [Scroll('scrollY')],
  watch:{
    'scrollY' : function(val){
        let content1 = document.getElementsByClassName('item-right')
        let content2 = document.getElementsByClassName('left-items')
        let content3 = document.getElementsByClassName('right-item')
        let content4 = document.getElementsByClassName('left-item');
        let content5 = document.getElementsByClassName('news-bottom-footer')
        // console.log(val)
        if(val>11700 && val<13200){
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
        if(val>12450 && val<13550){
            Array.from(content3).forEach(el=>{
                el.classList.add('active')
            })
            Array.from(content4).forEach(el=>{
                el.classList.add('active')
            })
        }else{
            Array.from(content3).forEach(el=>{
                el.classList.remove('active')
            })
            Array.from(content4).forEach(el=>{
                el.classList.remove('active')
            })
        }
        if(val>12750 && val<13625){
            Array.from(content5).forEach(el=>{
                el.classList.add('active')
            })
        }else{
            Array.from(content5).forEach(el=>{
                el.classList.remove('active')
            })
        }
    }
  }
};
</script>
