<template>
  <div class="our-scroll-container">
    <div class="our-scroll-description">
      <div
        class="description-content"
        :class="mover && checkDesc == item.id ? 'desc-animate-active' : 'desc-animate-deactive'"
        v-for="(item, idx) in ourUzbItems"
        :key="idx"
        v-show="checkDesc == item.id"
      >
        <h1>{{ item.name }}</h1>
        <p>{{ item.desc }}</p>
      </div>
    </div>
    <div class="our-scroll-one">
      <div
        class="one-img-content"
        v-for="(item, idx) in ourUzbItems"
        :key="idx"
        v-show="checkDesc == item.id"
        :class="mover && checkDesc == item.id ? 'img-animate-right' : 'img-animate-left'"
      >
        <img
          :src="require('@/assets/OurItems/Content/OneScroll/' + item.img1)"
          alt=""
        />
      </div>
    </div>
    <div class="our-scroll-content">
      <button>Читать далее</button>
      <div class="our-scroll-wrapper">
        <div
          class="our-scroll-items"
          v-for="(item, idx) in ourUzbItems"
          :key="idx"
          :class="{ 'province-active': checkDesc == item.id }"
        >
          <p @click="selectProvince(item.id)">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="our-scroll-two">
      <div
        class="two-img-content"
        :class="mover && checkDesc == item.id ? 'img-animate-right' : 'img-animate-left'"
        v-for="(item, idx) in ourUzbItems"
        :key="idx"
        v-show="checkDesc == item.id"
      >
        <img
          :src="require('@/assets/OurItems/Content/OneScroll/' + item.img2)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "our-uzb-scroll",
  data() {
    return {
      ourUzbItems: [
        {
          id: 1,
          name: "Ташкент",
          img1: "tashkent.png",
          img2: "tashkent1.png",
          desc: "Ташке́нт — столица и крупнейший город Узбекистана, город республиканского подчинения. Крупнейший по численности населения город Средней Азии, центр Ташкентской городской агломерации, важнейший политический, экономический, культурный и научный центр страны, а также авиационный, железнодорожный и автомобильный узел.",
        },
        {
          id: 2,
          name: "Бухара",
          img1: "bukhara.png",
          img2: "bukhara1.png",
          desc: "Бухарская область — одна из 12 областей Республики Узбекистан. Это вторая по величине область Узбекистана после Навоийской. Основан 15 января 1938 года. Территория Бухарской области расположена в основном в пустыне Кызылкум.",
        },
        {
          id: 3,
          name: "Хорезм",
          img1: "xorazm.png",
          img2: "xorazm2.png",
          desc: "Хорезм — древнее государство и регион Центральной Азии, с центром в низовьях реки Амударья. Как не было бы Египта без Нила, также не было бы Хорезма без Амударьи. По некоторым оценкам, ранее Амударья по рукаву Узбой впадала в Каспийское море, а река Тургай — в Арал. ",
        },
        {
          id: 4,
          name: "Самарканд",
          img1: "samarqand.png",
          img2: "samarqand1.png",
          desc: "Самарканд – один из древнейших городов Средней Азии, уютно расположившийся в цветущей долине реки Зеравшан. Он входит в тройку самых крупных и многонаселенных городов Узбекистана, уступая пальму первенства лишь столичному Ташкенту и Намангану.",
        },
        {
          id: 5,
          name: "Навоий",
          img1: "navoiy.webp",
          img2: "navoiy2.jpg",
          desc: "Навоий область — одна из 12 областей Республики Узбекистан. Это вторая по величине область Узбекистана после Навоийской. Основан 15 января 1938 года. Территория Бухарской области расположена в основном в пустыне Кызылкум.",
        },
      ],
      checkDesc: 1,
      mover: false,
    };
  },
  methods: {
    selectProvince(e) {
      this.mover = true;
      setTimeout(() => {
        this.checkDesc = e;
        this.mover = false;
      }, 1500);
    },
  },
};
</script>
