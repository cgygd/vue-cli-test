import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'

Vue.use(VueRouter)
const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
routerConfig(router)

// Resource
Vue.use(VueResource)

router.start(App, '#app')
window.router = router
