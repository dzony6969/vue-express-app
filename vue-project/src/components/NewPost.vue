<template>
<div>
  <div class="">
    <br>
    <br>
    <br>
    <h1 class='text-center'>Product creator</h1>
     <v-stepper class='text-center set--margin' id='v--stepper' v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" 
        editable
        step="1">
        Basic information
        <small>Summarize if needed</small>
      </v-stepper-step>
  
      <v-stepper-content step="1">
        <v-card color="" class="mb-5" height="420px">
          
          <div class='text-center set--width set--margin elevation-10' >
              <v-text-field
                v-model="title"
                color="purple darken-2"
                label="Product name"
                :rules='titleRules'
                required
              ></v-text-field>
    <br>
    <v-slider
                v-model="price"
                color="purple darken-2"
                :label="`price: ${price}$`"
                hint="Nie przesadzaj"
                min="1"
                :rules='priceRules'
                max="100" 
                thumb-label
              ></v-slider>
    <br>
     <v-textarea
          v-model="text"
          auto-grow
          :rules='textRules'
          box
          color="deep-purple"
          label="Description"
          rows="1"
        ></v-textarea>
        </div>
          
        </v-card>
        {{preventFirstStep}}
  
        <v-btn class='success' large :disabled='firstStep' @click="e6 = 2">Continue</v-btn>
        <router-link to='/posts'>
        <v-btn white large class='elevation-10' flat @click='e6 = 1'>Back to shop</v-btn>
        </router-link>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 2" step="2">Image and category</v-stepper-step>
  
      <v-stepper-content step="2">
        <v-card color="" class="mb-5" height="300px">
        
          <div class='text-center set--width set--margin elevation-10' >
          <h3>Copy and past link of your product image</h3>
          <v-text-field
        v-model="img"
        :rules='imageRules'
        color="purple darken-2"
        label='Image link (update 1day)'
        required
      ></v-text-field>
        <h3>Choose category</h3>
         <v-radio-group class='text-center' v-model="postType" row>
                <v-radio
                  :rules='postTypeRule'
                  v-for='item in items'
                  :key='item' 
                  :label='item'
                  color="purple darken-2"
                  :value='item'
                ></v-radio>
         </v-radio-group>
       
            </div>
         
        </v-card>
        {{preventSecondStep}}
        <v-btn class='success' :disabled='secondStep' large @click="e6 = 3">Continue</v-btn>
        <v-btn white large class='elevation-10' flat @click='e6 = 1'>Back to step 1</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 3" step="3">Product preview</v-stepper-step>
  
      <v-stepper-content step="3">
        <v-card color="" class="mb-5" height="700px">
      
    <br>
    <div class="container">

      <div class="row">

        <div class="col-lg-3">
          <h1 class="my-4">Nature shop</h1>
          <div class="list-group">
            <a href="#" class="list-group-item active">Category 1</a>
            <a href="#" class="list-group-item">Category 2</a>
            <a href="#" class="list-group-item">Category 3</a>
          </div>
        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-6">

          <div class="card mt-4">
            <img class="card-img-top img-fluid" :src="img" alt="">
            <div class="card-body">
              <h3 class="card-title">{{title}}</h3>
              <h4>{{price}} $</h4>
              <p class="card-text">{{text}}</p>
               <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          medium
          right
          bottom
        >
          <v-icon>shopping_basket</v-icon>
        </v-btn>
              <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
              4.0 stars
            </div>
          </div>
          <!-- /.card -->
          <!-- /.card -->
        </div>
        <!-- /.col-lg-9 -->
      </div>
    </div>
        </v-card>
        <v-btn dark large @click="e6 = 4">Continue</v-btn>
         <v-btn white large class='elevation-10' flat @click='e6 = 2'>Back to step 2</v-btn>
      </v-stepper-content>
  
      <v-stepper-step step="4">Add product to shop list</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="" class="mb-5" height="70px">
          <div class='text-center'>  
          <v-btn large dark color="success" @click='addPost'>
                Add new product
            </v-btn>
          </div>
        </v-card>
        <v-btn dark large @click="e6 = 1">Back to beginning</v-btn>
         <v-btn white large class='elevation-10' flat @click='e6 = 3'>Back to step 3</v-btn>
      </v-stepper-content>
    </v-stepper>
        </div>
        </div>
</template>

<script>
import PostsService from "../../services/PostsService";

export default {
  name: "NewPost",

  data() {
    return {
      items: ["Nature", "Devices", "Plants"],
      title: "",
      titleRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length > 1 || 'Name must be atleast more than 1 characters'
        ],
      text: "",
      textRules: [
          (v) => !!v || 'Description is required',
          (v) => v && v.length > 10 || 'To short. Atleast 10 characters'
        ],
      img: "",
      imageRules: [
        (v) => v && v.match(/\.(jpeg|jpg|gif|png)$/) || 'this is not correct URL. Make sure URL ends with .jpeg .jpg .gif or .png '
      ],
      price: "",
      priceRules: [
          // (v) => !!v || 'Name is required',
          (v) => v && v >= 1 && v <= 100 || 'You need to setup price between 1$ or 100$'
        ],
      postType: "",
      postTypeRule: [
        (v) => v && v.length > 0 || 'Choose category'
      ],
      e6: 1,
      firstStep: true,
      secondStep: true,
    };
  },
  methods: {
    async addPost() {
      if(this.postType.length > 0 &&
      this.price > 0 && 
      this.img.length > 0 &&
      this.title.length > 1 &&
      this.text.length > 10
      ) {
      await PostsService.addPost({
        title: this.title,
        text: this.text,
        img: this.img,
        price: this.price,
        postType: this.postType
      });
      this.$router.push({ name: "Posts" });
      } else {
        alert('Data missing, check your form')
      }
    }, 
  },
   computed: {
      preventFirstStep() {
        if(this.text.length > 10 && this.price > 0 && this.title.length > 1) {
          this.firstStep = false
        } else {
          this.firstStep = true
        }
      },
      preventSecondStep() {
        if(this.postType.length > 1 && this.img.match(/\.(jpeg|jpg|gif|png)$/)) {
          this.secondStep = false
        } else {
          this.secondStep = true
        }
      }
    }
};
</script>
<style type="scss">
.set--width {
  max-width: 600px;
  padding: 20px;
}
.set--margin {
  margin: 0 auto;
}
#v--stepper {
  max-width: 1000px;
}
</style>
