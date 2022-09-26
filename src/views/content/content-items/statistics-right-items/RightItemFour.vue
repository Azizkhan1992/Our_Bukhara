<template>
    <div class="item-four-container items">
        <div class="four-chart-content">
            <div class="chart-wrapper">
                <my-apexchart type="bar" height="350" :options="chartOptions" :series="series"></my-apexchart>
            </div>
            <h3>2400</h3>
        </div>
    </div>
</template>
<script>
    import Scroll from '@/directives/scrollPosition'
export default {
    name: 'item-four',
    data(){
        return{
            series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
          }],
          chartOptions: {   
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            xaxis: {
              categories: [
                ['John', 'Doe'],
                ['Joe', 'Smith'],
                ['Jake', 'Williams'],
                'Amber',
                ['Peter', 'Brown'],
                ['Mary', 'Evans'],
                ['David', 'Wilson'],
                ['Lily', 'Roberts'], 
              ],
            }
          },
        }
    },
    mixins: [Scroll('scrollY')],
    watch: {
        'scrollY' : function(val){
            let content = document.getElementsByClassName('item-four-container')
            if(val>10950 && val<11850){
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
}
</script>