import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import "./bootstrap"
import vuetify from "./plugins/vuetify";


import App from './App.vue'
import router from './router/index'
import ExampleComponent from "./components/ExampleComponent.vue"

 const app = new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app');
