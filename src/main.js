import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import './directives/scrollPosition'
// import './directives/scrollPosMixin'
// import ScrollAnimation from './directives/scrollanimation'

// Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
