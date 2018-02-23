import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
