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
        <v-btn 
         color="white"
          flat
          round
          class='font-weight-black font-italic'
        @click='credits = !credits'>Credits</v-btn>
       <v-card-text class='text-center' v-if='credits'>
         <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </v-card-text>

      </v-layout>
      
    </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: ["About Us", "Contact Us"],
      credits: true,
      };
  },
};
</script>
