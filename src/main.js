import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
