<template>
  <div class="item-three-container items">
    <div class="item-three-content">
      <div class="item-three-chart">
        <div class="chart-wrapper">
          <my-apexchart width="500" :options="chartOptions" type="area" :series="series"></my-apexchart>
        </div>
      </div>
      <h3>1881345</h3>
    </div>
  </div>
</template>
<script>
import Scroll from '@/directives/scrollPosition'
export default {
  name: "item-three",
  data() {
    return {
      chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
    mixins: [Scroll('scrollY')],
    watch:{
      'scrollY' : function(val){
        let content = document.getElementsByClassName('item-three-container')
        if(val>10600 && val< 11500){
            Array.from(content).forEach(elem=>{
                elem.classList.add('active')
            })
        }else{
            Array.from(content).forEach(elem=>{
                elem.classList.remove('active')
            })
        }
      }
    }
};
</script>
