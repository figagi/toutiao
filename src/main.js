// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import '@/assets/css/select.css'
import moment from 'moment'
import animate from 'animate.css'

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })
Vue.use(iView);
Vue.use(ElementUI);
Vue.use(moment);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
