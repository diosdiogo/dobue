import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'

//icones
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhoneAlt, faEnvelope, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'


library.add(faPhoneAlt)
library.add(faEnvelope)
library.add(faClock)
library.add(faAngleLeft)

library.add(faFacebookF)
library.add(faInstagram)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueAxios, axios); 

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
