<template>

  <div>
    <h1>App Home</h1>
    <v-btn
    elevation="2"
    >tap me</v-btn>
  </div>
  
</template>




<script lang="ts">
  import Vue from 'vue'
  //import Layout from './layout/Layout.vue';<Layout/>

  export default Vue.extend({
    name: 'App',
    data() {
      return {
        drawer: null
      }
    },
    components:{
      //Layout
    },
    
  })
  </script>