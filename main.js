import Vue from 'vue'
import App from './App' 
// import "./etc/etc.js"
import "./util/will_util.js"

import willNodata from '@/components/will_nodata/will_nodata.vue'; 
import plate from '@/components/plate/index.vue'
import navgater from '@/components/navgater/navgater.vue'
Vue.component('will-nodata', willNodata); 
Vue.component('plate', plate);
Vue.component('navgater', navgater);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
