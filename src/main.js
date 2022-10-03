import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import FontAwesome from "./assets/fontawesome"
import VueSmoothScroll from 'vue3-smooth-scroll'
import BaseDialog from './components/BaseDialog'
import BaseSpinner from './components/BaseSpinner'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSmoothScroll, {
  duration: 1000,
  offset: -30,
  updateHistory: false
})
app.component('font-awesome', FontAwesome)
app.component('base-dialog', BaseDialog)
app.component('base-spinner', BaseSpinner)
app.mount('#app')