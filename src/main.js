import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 网络请求
import axios from 'axios'
Vue.prototype.$http = axios

// 配置mint ui
import { Tabbar, TabItem, Swipe, SwipeItem, InfiniteScroll } from 'mint-ui'
import { Spinner, Navbar, TabContainer, Cell, TabContainerItem, Button  } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './plugins/element.js'
import './assets/css/index.css'

Vue.component(Tabbar.name, Tabbar)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Spinner.name, Spinner)
Vue.component(Cell.name, Cell)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Button.name, Button)
Vue.use(InfiniteScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
