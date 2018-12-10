<template>
    <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
                <v-icon v-for='item in items' :key='item' x-large 
                class="green--text text--lighten-2">local_florist</v-icon>
              <h1 class="headline font-weight-black">Nature shop</h1>
              <span class="subheading">
                <slot></slot>
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex v-for='item in items' :key='item' xs12 md4>
                  <v-card class="elevation-15 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">{{item}}</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
  
                </v-flex>
                <!-- <slot></slot> -->

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
</template>

<script>
    export default {
        data() {
            return {
                items: ['color_lens', 'flash_on','build']
            }
        }
    }
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>