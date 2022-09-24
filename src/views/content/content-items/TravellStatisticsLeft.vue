<template>
  <div class="statistics-left-container">
    <div class="left-item-one items">
      <img src="@/assets/OurItems/Content/ElewenStatistics/Vector.png" alt="" />
      <p>Туроператоры и турагенты</p>
    </div>
    <div class="left-item-two items">
      <img
        src="@/assets/OurItems/Content/ElewenStatistics/Vector1.png"
        alt=""
      />
      <p>Средства размещения</p>
    </div>
    <div class="left-item-three items">
      <img
        src="@/assets/OurItems/Content/ElewenStatistics/Vector2.png"
        alt=""
      />
      <p>Иностранные туристы</p>
    </div>
    <div class="left-item-four items">
      <img
        src="@/assets/OurItems/Content/ElewenStatistics/Vector3.png"
        alt=""
      />
      <p>Гиды</p>
    </div>
  </div>
</template>
<script>
    import Scroll from '@/directives/scrollPosition'
export default {
  name: "statistics-left",
  mixins: [Scroll('scrollY')],
  watch:{
    'scrollY' : function(val){
        let content1 = document.getElementsByClassName('left-item-one')
        let content2 = document.getElementsByClassName('left-item-two')
        let content3 = document.getElementsByClassName('left-item-three')
        let content4 = document.getElementsByClassName('left-item-four')

        if(val>9850 && val<10700){
            Array.from(content1).forEach(elem=>{
                elem.classList.add('active')
            })
        }else{
            Array.from(content1).forEach(elem=>{
                elem.classList.remove('active')
            })
        }
        if(val>10150 && val<11100){
            Array.from(content2).forEach(elem=>{
                elem.classList.add('active')
            })
        }else{
            Array.from(content2).forEach(elem=>{
                elem.classList.remove('active')
            })
        }
        if(val>10600 && val< 11500){
            Array.from(content3).forEach(elem=>{
                elem.classList.add('active')
            })
        }else{
            Array.from(content3).forEach(elem=>{
                elem.classList.remove('active')
            })
        }
        if(val>10950 && val<11850){
            Array.from(content4).forEach(elem=>{
                elem.classList.add('active')
            })
        }else{
            Array.from(content4).forEach(elem=>{
                elem.classList.remove('active')
            })
        }
    }
  }
};
</script>
