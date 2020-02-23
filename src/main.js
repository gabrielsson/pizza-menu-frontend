import VueApollo from 'vue-apollo'

import Vue from 'vue'
import App from './App.vue'
import 'tachyons'

Vue.config.productionTip = false


Vue.use(VueApollo)


new Vue({
  render: h => h(App),

}).$mount('#app')
