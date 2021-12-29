import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from "../components/About";
import Plane from "../components/Plane";
import User from "../components/User";
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/plane',
      name: 'Plane',
      component: Plane
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    },
  ]
})
