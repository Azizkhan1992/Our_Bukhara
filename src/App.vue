<template>
  <div id="app">
    <div id="progressbar"></div>
    <div id="scrollpath"></div>
    <our-uzbekistan-main-layout/>
  </div>
</template>

<script>


import OurUzbekistanMainLayout from './components/dashboardLayout/OurUzbekistanMainLayout.vue';
import Scroll from '@/directives/scrollPosition'

export default {
  name: 'App',
  components: {
    OurUzbekistanMainLayout
  },
  mixins: [Scroll('scrollY')],

  watch: {
    'scrollY' : function(val){
      let progress = document.getElementById('progressbar')
      let totalHeight = document.body.scrollHeight - (val/10);
      window.onscroll = function(){
        let progressHeight = (window.pageYOffset/totalHeight)*100;
        progress.style.height = progressHeight + '%'
      }
    }
  }

}
</script>
