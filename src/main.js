import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'

import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'

import routes from '@/roots'
import store from '@/store'
import i18n from '@/i18n'

import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  i18n
})
