import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main.vue'
import Order from '../components/order.vue'
import Personal from '../components/personal.vue'
import Shop from '../components/shop.vue'
Vue.use(VueRouter)

const routes = [
  /*主页*/
  { path: '/', redirect: '/main' },
  { name: 'main', path: '/main', component: Main },
  { name: 'order', path: '/order', component: Order },
  { name: 'personal', path: '/personal', component: Personal },
  { name: 'shop', path: '/shop', component: Shop },

]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
