import Vue from 'vue'
import router from './router'
import store from './store'
import Menu from './components/main'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(Menu)
}).$mount('#app')
