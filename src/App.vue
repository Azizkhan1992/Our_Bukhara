<template>
  <div id="app">
    <our-uzbekistan-main-layout/>
  </div>
</template>

<script>


import OurUzbekistanMainLayout from './components/dashboardLayout/OurUzbekistanMainLayout.vue';

export default {
  name: 'App',
  components: {
    OurUzbekistanMainLayout
  }
}
</script>

<style>
@import '@/assets/scss/style.scss';
</style>
