import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Vue Router
import VueRouter from 'vue-router'
import { routes } from './routes'

//Vuex
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = "https://*****";


const router = new VueRouter({
  mode: 'history',
  routes
})


Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
