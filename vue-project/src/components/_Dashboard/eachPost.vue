<template>
 <div class="container tex-center">

      <div class="row">
        <!-- /.col-lg-3 -->

        <div class="col-lg-offset-3 col-lg-6">

          <div class="card mt-4">
            <img class="card-img-top img-fluid" :src="product.img" alt="">
            <v-text-field
        v-model="product.img"
        :rules='imageRules'
        color="purple darken-2"
        label='Image link'
        required
      ></v-text-field>
            <div class="card-body">
              <h3 class="card-title">{{product.title}}</h3>
              <v-text-field 
              label='Change product name here' 
              v-model='product.title'
              :rules='titleRules'
              color="deep-purple"
              ></v-text-field>
              <h4>{{product.price}} $</h4>
              <v-slider
                v-model="product.price"
                color="purple darken-2"
                min="1"
                :rules='priceRules'
                max="100" 
                thumb-label
              ></v-slider>
              <span class='note--description' style="">{{product.text}}</span>
               <v-textarea
          v-model="product.text"
          auto-grow
          :rules='textRules'
          box
          color="deep-purple"
          label="Description"
          rows="1"
        ></v-textarea>
               <v-btn
          v-if='checkValidation'
          :disabled='disableButton' 
          @click='updatePost()'
          color="success"
          class="white--text"
          medium
          right
          bottom
        >
          Update product
        </v-btn>
        <v-alert
        :value="true"
        v-if='!checkValidation'
        type="warning"
      >
        Check your form
      </v-alert>
  
            </div>
          </div>
          <!-- /.card -->
          <!-- /.card -->
        </div>
        <!-- /.col-lg-9 -->
      </div>
      {{checkIfUpdate}}
      {{checkFormValidation}}
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Changes:
          </v-card-title>
          <v-card-text>
          <p v-if='product.title !== beforeUpdate.title'>
            Product name changed from <s>{{beforeUpdate.title}}</s> to <strong>{{product.title}}</strong>
          </p>
          <p v-if='product.text !== beforeUpdate.text'>You change description</p>
          <p v-if='product.price !== beforeUpdate.price'>
            Price changed from <s>{{beforeUpdate.price}}$</s> to {{product.price}}$
          </p>
          <p v-if='product.img !== beforeUpdate.img'>Image changed</p>
          
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <router-link to='/adminpost'>
            <v-btn
              color="primary"
              flat
              @click="dialog = false, getPost()"
            >
              back to product list
            </v-btn>
            </router-link>
            <v-btn
              color="primary"
              flat
              @click="dialog = false, getPost()"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
import PostsService from "../../../services/PostsService";
export default {
  data() {
    return {
      titleRules: [
        v => !!v || "Name is required",
        v =>
          (v && v.length > 1) || "Name must be atleast more than 1 characters"
      ],
      priceRules: [
        // (v) => !!v || 'Name is required',
        v =>
          (v && v >= 1 && v <= 100) ||
          "You need to setup price between 1$ or 100$"
      ],
      imageRules: [
        v =>
          (v && v.match(/\.(jpeg|jpg|gif|png)$/)) ||
          "this is not correct URL. Make sure URL ends with .jpeg .jpg .gif or .png "
      ],
      textRules: [
        v => !!v || "Description is required",
        v => (v && v.length > 10) || "To short. Atleast 10 characters"
      ],
      disableButton: true,
      checkValidation: true,
      dialog: false,
      product: {
        title: "",
        text: "",
        img: "",
        price: ""
      },
      beforeUpdate: {
        title: "",
        text: "",
        img: "",
        price: ""
      }
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      try {
        const response = await PostsService.getPost({
          id: this.$route.params.id
        });
        this.product.title = response.data.title;
        this.beforeUpdate.title = response.data.title;
        this.product.text = response.data.text;
        this.beforeUpdate.text = response.data.text;
        this.product.img = response.data.img;
        this.beforeUpdate.img = response.data.img;
        this.product.price = response.data.price;
        this.beforeUpdate.price = response.data.price;
      } catch (err) {
        console.log(err);
      }
    },
    async updatePost() {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.product.title,
        text: this.product.text,
        img: this.product.img,
        price: this.product.price
      });
      this.dialog = true;
    }
  },
  computed: {
    checkIfUpdate() {
      if (
        this.product.title !== this.beforeUpdate.title ||
        this.product.text !== this.beforeUpdate.text ||
        this.product.img !== this.beforeUpdate.img ||
        this.product.price !== this.beforeUpdate.price
      ) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    },
    checkFormValidation() {
      if (
        this.product.title.length > 1 &&
        this.product.text.length > 10 &&
        this.product.img.match(/\.(jpeg|jpg|gif|png)$/)
      ) {
        this.checkValidation = true;
      } else {
        this.checkValidation = false;
      }
    }
  }
};
</script>
<style lang="scss">
.note--description {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}
s {
  color: red;
}
</style>
