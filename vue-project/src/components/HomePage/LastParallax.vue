<template>
    
<v-parallax
      id='parallax'
      dark
      height='450'
      src="https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?cs=srgb&dl=background-background-image-creek-707915.jpg&fm=jpg"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3 h1--opacity">GET OUR MOBILE APP</h1>
        <img class='google--iphone' src="https://i.ibb.co/d6V91HD/google-play-badge-1.png" alt="google-play-badge-1" border="0">
        <img class='iphone--' src="https://honkbarkstudios.com/wp-content/uploads/2016/03/app-store-badge.png" alt="">
      </v-layout>
      <v-hover>
      <v-btn
            slot-scope="{hover}"
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="indigo"
            @click="toTop"
          >
           <v-expand-transition>
        </v-expand-transition>
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>
      </v-hover>
    </v-parallax>
</template>

<script>
export default {
  data: () => ({
    fab: false
  }),

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style lang="scss">
.h1--opacity {
  background: rgba(black, 0.9);
  padding: 20px;
  opacity: 0.6
}
.google--iphone {
  width: 230px;
}
.iphone-- {
  width: 200px;
  float: right;
  overflow: auto;
}
  
</style>
