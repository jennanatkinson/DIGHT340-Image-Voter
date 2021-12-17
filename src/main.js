import Vue from 'vue'
import App from './App.vue'
import router from './router'
import imageData from './imageData'

Vue.config.productionTip = false

let data = {
  imageList: imageData.map(obj=> ({ ...obj, voteCounter: 0 }))
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
