import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import store from './store/index.js'
import Vuetify from 'vuetify'
import moment from 'moment'
import _ from 'lodash'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.prototype.moment = moment
Vue.prototype._ = _

Vue.use(Vuetify)
Vue.use(VueAwesomeSwiper)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

