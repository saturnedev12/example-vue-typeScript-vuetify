<template>
    <v-container fluid style="margin: 0px; padding: 20px; width: 100%">
        <v-row >
          <v-col
            v-for="n in 24"
            :key="n"
            cols="3"
          >
            <v-card height="200" elevation="4"></v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
  export default {
    name:"Conformite",
    data: () => 
    ({}),
  }
</script>

<style>
   
</style>