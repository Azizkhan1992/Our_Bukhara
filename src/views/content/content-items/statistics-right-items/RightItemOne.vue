<template>
  <div class="item-one-container items">
    <div class="one-circle-items">
      <div class="one-circle">
        <svg
          viewBox="-1 -1 40 40"
          xmlns="http://www.w3.org/2000/svg"
          v-for="(item, idx) in statistics_one"
          :key="idx"
          :width="(idx + 1) * 65 + 'px'"
          :height="(idx + 1) * 65 + 'px'"
          :class="{'svg-one': idx==0, 'svg-two': idx==1, 'svg-three' : idx ==2, 'svg-four' : idx ==3}"
        >
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            style="stroke: #2b2a44"
            stroke-width="2"
          ></circle>
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke-width="2"
            stroke-dasharray="100, 100"
            :stroke-dashoffset="100-item.percent"
            stroke-linecap="round"
          ></circle>
        </svg>
      </div>

      <div class="one-title">
        <div
          class="title-items"
          v-for="(item, idx) in statistics_one"
          :key="idx"
        >
          <img
            :src="
              require('@/assets/OurItems/Content/ElewenStatistics/ItemOne/' +
                item.img2 +
                '.svg')
            "
            alt=""
          />
          <p>{{ item.percent }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Scroll from '@/directives/scrollPosition'
export default {
  name: "item-one",
  data() {
    return {
      statistics_one: [
        {
          id: 1,
          img2: "Vector",
          percent: 25,
        },
        {
          id: 2,
          img2: "Vector1",
          percent: 50,
        },
        {
          id: 3,
          img2: "Vector2",
          percent: 65,
        },
        {
          id: 4,
          img2: "Vector3",
          percent: 75,
        },
      ],
    };
  },
  mixins: [Scroll('scrollY')],
  watch:{
    'scrollY': function(val){
        let content1 = document.getElementsByClassName('item-one-container')
        if(val>9850 && val<10700){
            Array.from(content1).forEach(elem=>{
                elem.classList.add('active')
            })
        }else{
            Array.from(content1).forEach(elem=>{
                elem.classList.remove('active')
            })
        }
    }
  }
};
</script>
