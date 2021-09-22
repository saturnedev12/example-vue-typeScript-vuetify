import Vue from 'vue'
import VueRouter from 'vue-router'
import Conformite from '../pages/conformite/Conformite.vue'
import Accueil from '../pages/accueil/Accueil.vue'
import ExampleComponent from '../components/ExampleComponent.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/',
     component: Accueil 
    },
    {
      path: '/conformite',
      name: 'Conformite',
      component: Conformite
    },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
