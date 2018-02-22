import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import HelloWorld from '@/components/HelloWorld'
import home from '../components/home.vue'

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
