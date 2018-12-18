<template>

  <v-footer
      height="auto"
      color="blue lighten-1"
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          flat
          round
          class='font-weight-black font-italic'
        >
          {{ link }}
        </v-btn>
      
      </v-layout>
    </v-footer>
</template>

<script>
    export default {
        data() {
            return {
                links: [
            'Home',
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us'
          ]
            }
        }
    }
</script>