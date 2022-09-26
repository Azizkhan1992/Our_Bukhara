import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import './directives/scrollPosition'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('my-apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
