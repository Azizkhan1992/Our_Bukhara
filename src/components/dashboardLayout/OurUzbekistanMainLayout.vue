<template>
  <div class="our-uzb-container">
    <our-uzb-header-layout />
    <our-uzb-content-layout />
    <div id="progressbar"></div>
    <div id="scrollpath"></div>
    <button class="sticky-btn">
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.47734 15.2129C3.36367 15.3117 3.22417 15.3761 3.0752 15.3984C2.92624 15.4207 2.77399 15.4001 2.63634 15.3389C2.4987 15.2777 2.38136 15.1785 2.29811 15.053C2.21486 14.9275 2.16914 14.7808 2.16634 14.6302V12.8545C1.74642 12.8545 1.34369 12.6877 1.04676 12.3907C0.749823 12.0938 0.583008 11.6911 0.583008 11.2712V5.72949C0.583008 5.30957 0.749823 4.90684 1.04676 4.60991C1.34369 4.31297 1.74642 4.14616 2.16634 4.14616H10.8747C11.2946 4.14616 11.6973 4.31297 11.9943 4.60991C12.2912 4.90684 12.458 5.30957 12.458 5.72949V11.2712C12.458 11.6911 12.2912 12.0938 11.9943 12.3907C11.6973 12.6877 11.2946 12.8545 10.8747 12.8545H6.91872L3.47734 15.2129ZM4.14551 12.7642C4.21765 12.7638 4.28849 12.745 4.35134 12.7096L6.21572 11.4129C6.3484 11.3206 6.50614 11.2711 6.66776 11.2712H10.083C10.293 11.2712 10.4943 11.1878 10.6428 11.0393C10.7913 10.8908 10.8747 10.6895 10.8747 10.4795V6.52116C10.8747 6.3112 10.7913 6.10983 10.6428 5.96137C10.4943 5.8129 10.293 5.72949 10.083 5.72949H2.95801C2.74804 5.72949 2.54668 5.8129 2.39821 5.96137C2.24975 6.10983 2.16634 6.3112 2.16634 6.52116V10.4795C2.16634 10.907 2.50597 11.2569 2.95801 11.2712C3.28259 11.2838 3.51772 11.3369 3.62617 11.4501C3.72751 11.5562 3.73305 11.7351 3.74967 12.0755C3.75205 12.1254 3.75205 12.2156 3.74967 12.3684C3.74967 12.4734 3.79138 12.5741 3.86561 12.6483C3.93984 12.7225 4.04053 12.7642 4.14551 12.7642ZM13.2497 8.90882C13.2471 9.00645 13.2471 9.10412 13.2497 9.20174V8.90882C13.2655 8.56841 13.2718 8.38949 13.3732 8.28341C13.4816 8.1702 13.7168 8.11716 14.0413 8.10449C14.4934 8.09024 14.833 7.74032 14.833 7.31283V3.35449C14.833 3.14453 14.7496 2.94317 14.6011 2.7947C14.4527 2.64623 14.2513 2.56283 14.0413 2.56283H6.91634C6.70638 2.56283 6.50501 2.64623 6.35655 2.7947C6.20808 2.94317 6.12467 3.14453 6.12467 3.35449H4.54134V2.56283C4.54134 2.1429 4.70816 1.74017 5.00509 1.44324C5.30202 1.14631 5.70475 0.979492 6.12467 0.979492L14.833 0.979492C15.2529 0.979492 15.6557 1.14631 15.9526 1.44324C16.2495 1.74017 16.4163 2.1429 16.4163 2.56283V8.10449C16.4163 8.52442 16.2495 8.92714 15.9526 9.22408C15.6557 9.52101 15.2529 9.68783 14.833 9.68783V11.4635C14.8302 11.6141 14.7845 11.7608 14.7012 11.8863C14.618 12.0119 14.5007 12.1111 14.363 12.1722C14.2254 12.2334 14.0731 12.254 13.9241 12.2317C13.7752 12.2094 13.6357 12.145 13.522 12.0462L13.2497 11.8594V8.90962V8.90882Z"
          fill="currentcolor"
        />
      </svg>
      <a href="#">???????????????? ??????</a>
    </button>
    <div class="main-circle" id="main-circle">
      <svg viewBox="-1 -1 50 50" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px">
        <circle  cx="25" cy="25" r="15.9155" fill="none" stroke-width="3"></circle>
        <circle  cx="25" cy="25" r="15.9155" fill="none" stroke-width="3" stroke-dasharray="100, 100" :stroke-dashoffset="100-circle_border"></circle>
      </svg>
    </div>
    <our-uzb-footer-layout />
  </div>
</template>
<script>
  import Scroll from '@/directives/scrollPosition'
import OurUzbHeaderLayout from "./OurUzbHeaderLayout.vue";
import OurUzbContentLayout from "./OurUzbContentLayout.vue";
import OurUzbFooterLayout from "./OurUzbFooterLayout.vue";
export default {
  name: "our-main",
  components: { OurUzbHeaderLayout, OurUzbContentLayout, OurUzbFooterLayout },
  data(){
    return{
      circle_border: 0
    }
  },
  mixins: [Scroll('scrollY')],

  watch: {
    'scrollY' : function(val){

      let progress = document.getElementById('progressbar')
      let totalHeight1 = document.body.scrollHeight - (val/10);


      let scrollItem = document.getElementById('main-circle')

      let totalHeight = document.body.scrollHeight;
      this.circle_border = 100*((val+1000)/totalHeight)

      scrollItem.onclick = function(){
        scrollTop();
      }

      function scrollTop(){
        window.scrollTo(
          {
            top: 0,
            behavior: 'smooth'
          }
        )
      }

      window.onscroll = function(){

        let progressHeight = (window.pageYOffset/totalHeight1)*100;
        progress.style.height = progressHeight + '%'


        if(document.documentElement.scrollTop > 150 || document.body.scrollTop > 150){
          scrollItem.classList.add('item-visible')
        }else{
          scrollItem.classList.remove('item-visible')
        }
      }
    }
  }
};
</script>
