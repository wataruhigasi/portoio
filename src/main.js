import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vuecarousel from './plugins/vue-carousel'
import vuescrollto from './plugins/vue-scrollto'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vuecarousel,
  vuescrollto,
  render: h => h(App)
}).$mount('#app')
