<template>
  <div class="item-two-container items">
    <div class="item-two-circle">
      <svg viewBox="-1 -1 50 50" xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" v-for="item, idx in statistics_two" :key="idx">
        <circle  cx="20" cy="20" r="15.9155" fill="none" stroke-width="8"></circle>
        <circle  cx="20" cy="20" r="15.9155" fill="none" stroke-width="8" stroke-dasharray="100, 100" :stroke-dashoffset="100-item.percent"></circle>
      </svg>
      <h3>1442</h3>
    </div>
    <div class="item-two-title">
        <div class="title-items-two" v-for="item, idx in statistics_two" :key="idx">
            <div class="first-part"></div>
            <p class="first-percent">{{firstPercent}}%</p>
            <div class="last-part"></div>
            <p class="last-percent">{{item.percent}}%</p>
        </div>
    </div>
  </div>
</template>
<script>
    import Scroll from '@/directives/scrollPosition'
export default {
  name: "item-two",
  data() {
    return {
      statistics_two: [
        {
          id: 1,
          percent: 50,
        },
      ],
    };
  },
  computed:{
    firstPercent(){
        let result;
        this.statistics_two.forEach(elem=>{
            result = 100-elem.percent
        })
        return result;
    }
  },
  mixins: [Scroll('scrollY')],
  watch: {
    'scrollY' : function(val){
        let content1 = document.getElementsByClassName('item-two-container')
        if(val>10150 && val<11100){
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
