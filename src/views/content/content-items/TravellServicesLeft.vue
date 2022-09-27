<template>
  <div class="services-left">
    <div class="left-img-one">
      <img
        :src="require('@/assets/OurItems/Content/ThreetenService/' + item.img)"
        alt=""
        v-for="(item, idx) in left_img_one"
        :key="idx"
        :class="{
          'center-img': idx == 0,
          'img-one': idx == 1 || idx == 3,
          'img-two': idx == 2 || idx == 4,
        }"
      />
      <p class="one-title">E-Mehmonxona</p>
    </div>

    <div class="left-img-two">
      <img
        :src="require('@/assets/OurItems/Content/ThreetenService/' + item1.img)"
        alt=""
        v-for="(item1, idx) in left_img_two"
        :key="idx"
        :class="{
          'center-img-two': idx == 0,
          'img-three': idx == 1 || idx == 3,
          'img-four': idx == 2,
        }"
      />
      <p>Gidlar reyestri</p>
    </div>
    <div class="left-img-three">
      <img
        :src="require('@/assets/OurItems/Content/ThreetenService/' + item.img)"
        alt=""
        v-for="(item, idx) in left_img_three"
        :key="idx"
        :class="{'center-img-three' : idx==0, 'img-five' : idx==1, 'img-six' : idx==2 || idx==4, 'img-seven' : idx==3 || idx==5}"
      />
      <p>Litsenziya olish</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "services-left",
  data() {
    return {
      left_img_one: [
        {
          id: 1,
          img: "center1.svg",
        },
        {
          id: 2,
          img: "img1.svg",
        },
        {
          id: 3,
          img: "img2.svg",
        },
        {
          id: 4,
          img: "img3.svg",
        },
        {
          id: 5,
          img: "img4.svg",
        },
      ],
      left_img_two: [
        {
          id: 1,
          img: "center2.svg",
        },
        {
          id: 2,
          img: "img5.svg",
        },
        {
          id: 3,
          img: "img6.svg",
        },
        {
          id: 4,
          img: "img7.svg",
        },
      ],
      left_img_three: [
        {
          id: 1,
          img: "images.png",
        },
        {
          id: 2,
          img: 'center3.svg'
        },
        {
          id: 3,
          img: "img9.svg",
        },
        {
          id: 4,
          img: 'img10.svg'
        },
        {
          id: 5,
          img: 'img11.svg'
        },
        {
          id: 6,
          img: 'img12.svg'
        }
      ],
    };
  },
};
</script>
