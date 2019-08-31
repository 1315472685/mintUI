import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'lib-flexible'
import { Button, Cell, Field } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Field.name, Field)
// Vue.use(Button)
// Vue.use(Cell)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
