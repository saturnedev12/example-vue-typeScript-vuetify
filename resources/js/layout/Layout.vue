<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
 <!-- le side bar -->
            <v-list>
                <v-list-item-group v-model="model">
                     <router-link to="/home">
                        <v-list-item>
                        <v-list-item-icon>
                            <v-icon>home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Accueil</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <!--<router-link to="/">
                        <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </router-link>-->
                   

                    <router-link to="/conformite">
                        <v-list-item style="background-color:;">
                        <v-list-item-icon>
                            <v-icon >mdi-star</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>conformite</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </router-link>
                    
                </v-list-item-group>
            </v-list>


    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
         
      </v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view/>
    </v-main>
  </v-app>
</template>




<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Layout',
    data() {
      return {
        drawer: null,
        items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
        },
        {
          icon: 'mdi-star',
          text: 'Star',
        },
        {
          icon: 'mdi-send',
          text: 'Send',
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts',
        },
      ],
      model: 1,
      }
    },
    /*components:{
      Layout
    },
    computed: {
      fullName(): string {
        return `${this.user.firstName} ${this.user.lastName}`
      }
    },
    mounted(): void {
      this.user = {
        firstName: `Sammy`,
        lastName: `Shark`,
        twitterHandle: `@digitalocean`,
        location: {
          city: `New York City`,
          state: `NY`
        }
      }
    }*/
  })