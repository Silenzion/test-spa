import Vue from 'vue'
import App from './App.vue'
import store from './store';
import BootstrapVue from 'bootstrap-vue';

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/styles/main.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
