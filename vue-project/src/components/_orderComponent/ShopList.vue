<template>
 <div>
   <v-jumbotron
   v-if='cart.length >0'
   class='elevation-10 text-center'
   >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Nature shop</h3>

          <span class="subheading">If you want to finish your order click below button</span>
          <h4 v-if='disc.onlyOneCode'>you ordered {{cart.length}} items from our shop. <br> Total price: {{`${summary.toFixed(2)}$`}}</h4>
          <div v-if='!disc.onlyOneCode'>
          <h4 >you ordered {{cart.length}} items from our shop. <br> Total price: <strong class='discount--color'> {{`${summary.toFixed(2)}$`}}</strong> after discount</h4>
          </div>

          <div class="title mb-3"></div>

          <router-link 
          to="/payment">
         <v-btn
        color='success'
        large><span>Finish your order</span>
      </v-btn>
        </router-link>
      <v-btn :disabled='!disc.onlyOneCode' large @click="dialog = true">I have a discount code</v-btn>
      <v-dialog
        v-model="dialog"
        max-width="400"
      >
        <v-card>
          <v-card-title class="headline">Type your discount code below</v-card-title>
              
          <v-card-text>
            <p>hint: type 'nature'</p>  
             <v-text-field
        v-model="code"
        label="Type your code here"
      ></v-text-field>
      <div v-if='disc.warning.length > 0'>
      <v-alert
        :value='true'
        type="warning"
      >
        {{disc.warning}}
      </v-alert>
      </div>

          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="green darken-1"
              flat="flat"
              @click='discSum(code), closeDialog()'
            >
              Check code
            </v-btn>
  
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialog = false"
            >
              Back to order
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
   <v-jumbotron v-if='cart.length === 0'>
    <v-container fill-height grid-list-md text-xs-center>
      <v-layout align-center
      color='red'
      >
        <v-flex>
          <h3 class="display-3">Nature shop</h3>

          <span class="subheading">Your have {{cart.length}} item in casket</span>
     


          <div class="title mb-3"></div>

          <router-link 
          to="/posts">
         <v-btn
        color='green'
        large><span>Back to our shop</span>
        
      </v-btn>
        </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
<v-container v-if='cart.length > 0' id='listOfProduct' grid-list-md text-xs-center>
    <br>
    <br>
    <br>
    <br>
      <v-layout row wrap>
      <v-flex v-for="post in cart" :key="post._id" xs12 sm6 lg4 class="my-3">
        <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="500"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="post.img"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
         
            {{`$${post.price}`}}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
       
        <router-link 
                  v-bind:to="{ name: 'showPost', params: { id: post.id } }">
        <div class="font-weight-light grey--text title mb-2">
           
          {{post.title}}</div>
        </router-link>
        <v-btn color="red" 
        @click='deleteItem(post), priceSum(), checkSumChange()'
        dark>Delete
          <v-icon dark right>block</v-icon>
        </v-btn>
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
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      code: "",
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["cart", "summary", "disc"])
  },
  methods: {
    ...mapActions(["deleteItem", "priceSum", "discSum", "checkSumChange"]),
    closeDialog() {
      if (
        this.code.toLowerCase() === "nature" ||
        this.code.toUpperCase() === "nature"
      ) {
        this.dialog = false;
      }
    }
  }
};
</script>

<style lang="scss">
.discount--input {
  width: 400px;
  margin: 0 auto;
}
.discount--color {
  color: red;
}
</style>
