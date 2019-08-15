import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router';
import store from './store'

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname
})

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
