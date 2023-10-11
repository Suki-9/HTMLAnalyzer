// Vue Component ---------------------------------------///
import App from './App.vue'

// TS Module -------------------------------------------///
import { createApp } from 'vue'

// Plugin ----------------------------------------------///
import router from "./router"

// Style sheet -----------------------------------------///
import './style/main.css'


createApp(App)
  .use(router)
  .mount('#app')
