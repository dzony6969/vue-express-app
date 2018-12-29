<template>
<div>
  <v-container class='rwd--container' grid-list-md text-xs-center>
      <v-layout row wrap>
      <v-flex v-for="arr in arrs" :key="arr" xs12 sm4 class="my-3">
        <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="500"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="arr"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          medium
          right
          top
        >
          <v-icon >shopping_basket</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
        <div class="font-weight-light title mb-2">
        </div>
      </v-card-text>
    </v-card>
     </v-hover>
    </v-flex>
      </v-layout>
  </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      arrs: [
        "https://i.wpimg.pl/O/644x428/d.wpimg.pl/204634975-1593965418/bazylia.jpg",
        "https://ogrod.smcloud.net/s/photos/t/11189/chmiel_1004241.jpg",
        "https://7.allegroimg.com/s512/0144c4/3f9bc396465f881d892521432af7"
      ]
    };
  }
};
</script>
<style lang="scss">
@media only screen and (max-width: 800px) {
  .rwd--container {
    display: none;
  }
}
</style>
