import Vue from 'vue'
import App from './App.vue'
import './assets/common.less'
// import echarts from 'echarts'
import dataV from '@jiaminghi/data-view'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(BaiduMap,{
  ak: 'XIOqEez4zYgflABXsNlwYlCdBmU2bwqY'  
})
// Vue.prototype.$echarts = echarts
Vue.use(dataV)

new Vue({
  render: h => h(App)
}).$mount('#app')
