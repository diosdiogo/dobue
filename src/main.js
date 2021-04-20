import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'

//icones
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


library.add(faPhoneAlt)
library.add(faEnvelope)
library.add(faClock)
library.add(faFacebookF)
library.add(faInstagram)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
