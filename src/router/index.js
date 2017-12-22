import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Site from '@/components/Site'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/about',
      name: 'about',
      component: About
    },
    {
      path:'/site',
      name: 'site',
      component: Site
    },
  ]
})
