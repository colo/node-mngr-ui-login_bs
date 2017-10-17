// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Login from './App'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#login',
  template: '<Login/>',
  components: { Login }
})
