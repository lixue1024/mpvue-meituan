import Vue from 'vue'
import App from './App'

import '@/style/common.css'
import '@/style/iconfont.css'
import '@/style/iconfont2.css'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
