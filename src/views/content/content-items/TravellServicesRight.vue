<template>
  <div class="services-right">
    <div class="right-left"></div>
    <div class="right-right">
      <div class="right-img-one">
        <img
          :src="
            require('@/assets/OurItems/Content/ThreetenService/' + item.img)
          "
          alt=""
          v-for="(item, idy) in right_img_one"
          :key="idy"
          :class="{
            'right-center-one': idy == 0,
            'img-eight': idy == 1,
            'img-nine': idy == 2 || idy == 4,
            'img-ten': idy == 3 || idy == 5,
          }"
        />
        <p>Sayyoh</p>
      </div>
      <div class="right-img-two">
        <img
          :src="
            require('@/assets/OurItems/Content/ThreetenService/' + item.img)
          "
          alt=""
          v-for="(item, idy) in right_img_two"
          :key="idy"
          :class="{
            'right-center-two': idy == 0,
            'img-elewen': idy == 1,
            'img-twelwe': idy == 2 || idy == 4,
            'img-threeten': idy == 3,
          }"
        />
        <p>Joylashtirish vositalari reyestri</p>
      </div>
      <div class="right-img-three">
        <img
          :src="
            require('@/assets/OurItems/Content/ThreetenService/' + item.img)
          "
          alt=""
          v-for="(item, idy) in right_img_three"
          :key="idy"
          :class="{ 'right-center-three': idy == 0, 'img-fourten': idy == 1, 'img-fiveten' : idy==2 || idy==4, 'img-sixten' : idy==3 || idy==5 }"
        />
        <p>Sertifikatlash</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "services-right",
  data() {
    return {
      right_img_one: [
        {
          id: 1,
          img: "traveller.svg",
        },
        {
          id: 2,
          img: "img13.svg",
        },
        {
          id: 3,
          img: "img1.svg",
        },
        {
          id: 4,
          img: "img2.svg",
        },
        {
          id: 5,
          img: "img3.svg",
        },
        {
          id: 6,
          img: "img4.svg",
        },
      ],
      right_img_two: [
        {
          id: 1,
          img: "aeroplane.svg",
        },
        {
          id: 2,
          img: "img14.svg",
        },
        {
          id: 3,
          img: "img5.svg",
        },
        {
          id: 4,
          img: "img6.svg",
        },
        {
          id: 5,
          img: "img7.svg",
        },
      ],
      right_img_three: [
        {
          id: 1,
          img: "sertificate.svg",
        },
        {
          id: 2,
          img: "img15.svg",
        },
        {
          id: 3,
          img: "img9.svg",
        },
        {
          id: 4,
          img: "img10.svg",
        },
        {
          id: 5,
          img: "img11.svg",
        },
        {
          id: 6,
          img: "img12.svg",
        },
      ],
    };
  },
};
</script>
