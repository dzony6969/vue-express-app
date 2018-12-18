<template>
<div>
        <h2 class='text-center'>Nature category products</h2>
    <table  class="table table--width">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col name--width">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody v-for='(post, index) in posts' v-if='post.postType === "Nature"' :key='post._id'>
    <tr>
      <th scope="row">{{index}}</th>
      <td>{{post.title}}</td>
      <td>{{post.price}}$</td>
      <td>
          <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-btn
          slot="activator"
          color="red lighten-2"
          dark
        >
          Click Me
        </v-btn>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Privacy Policy
          </v-card-title>
  
          <v-card-text>
              Are you sure about deleting this product?
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class='warning' @click='deletePost(post._id), setDialog()'>Delete</v-btn>
            <v-btn dark @click='setDialog()'>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </td>
    </tr>
  </tbody>
</table>
<h2 class='text-center'>Devices category products</h2>
    <table class="table table--width">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col name--width">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody  v-for='(post, index) in posts' v-if='post.postType === "Devices"' :key='post._id'>
    <tr>
      <th scope="row">{{index}}</th>
      <td>{{post.title}}</td>
      <td>{{post.price}}$</td>
      <td>
          <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-btn
          slot="activator"
          color="red lighten-2"
          dark
        >
          Click Me
        </v-btn>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Privacy Policy
          </v-card-title>
  
          <v-card-text>
              Are you sure about deleting this product?
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class='warning' @click='deletePost(post._id), setDialog()'>Delete</v-btn>
            <v-btn dark @click='setDialog()'>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </td>
    </tr>
  </tbody>
</table>
<h1 class='text-center'>Plants category products</h1>
<table class="table table--width">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col name--width">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody  v-for='(post, index) in posts' v-if='post.postType === "Plants"' :key='post._id'>
    <tr>
      <th scope="row">{{index}}</th>
      <td>{{post.title}}</td>
      <td>{{post.price}}$</td>
      <td>
          <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-btn
          slot="activator"
          color="red lighten-2"
          dark
        >
          Click Me
        </v-btn>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Privacy Policy
          </v-card-title>
  
          <v-card-text>
              Are you sure about deleting this product?
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class='warning' @click='deletePost(post._id), setDialog()'>Delete</v-btn>
            <v-btn dark @click='setDialog()'>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </td>
    </tr>
  </tbody>
</table>
<h1 class='text-center'>No category product</h1>
<table class="table table--width">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col name--width">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody  v-for='(post, index) in posts' v-if='post.postType === ""' :key='post._id'>
    <tr>
      <th scope="row">{{index}}</th>
      <td>{{post.title}}</td>
      <td>{{post.price}}$</td>
      <td>
          <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-btn
          slot="activator"
          color="red lighten-2"
          dark
        >
          Click Me
        </v-btn>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Privacy Policy
          </v-card-title>
  
          <v-card-text>
              Are you sure about deleting this product?
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class='warning' @click='deletePost(post._id), setDialog()'>Delete</v-btn>
            <v-btn dark @click='setDialog()'>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
          
      </td>
    </tr>
  </tbody>
</table>

</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
    export default {
        data() {
            return {
                dialog: false,
            }
        },
         mounted () {
            this.$store.dispatch('getPosts'),
            this.$store.dispatch('deletePost')
         },
         computed: {
             ...mapState(['posts'])
         },
         methods: {
        ...mapActions([
        'deletePost',
            ]),
           setDialog() {
               this.dialog = false;
           }
        }
    }
</script>

<style lang="scss">
    .table--width {
        max-width: 960px;
        margin: 30px auto;
    }
    .name--width {
        max-width: 230px;
    }
</style>