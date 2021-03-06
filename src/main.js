// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import vueTap from 'vue-js-tap'
import echarts from 'echarts'
import { Radio, XButton, ToastPlugin, ConfirmPlugin, LoadingPlugin, Calendar, DatetimePlugin, Toast } from 'vux'
import store from './store'
import 'jQuery'

Vue.use(VueRouter)
Vue.use(vueTap)

Vue.component('toast', Toast)
Vue.component('radio', Radio)
Vue.component('x-button', XButton)
Vue.component('calendar', Calendar)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(DatetimePlugin)
Vue.prototype.echarts = echarts
FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
