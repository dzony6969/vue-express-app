<template>
    <div class="container tex-center">

        <div class="row">

            <div class="col-lg-offset-3 col-lg-6">

                <div class="card mt-4">
                    <img class="card-img-top img-fluid" :src="product.img" alt="">
                    <v-text-field 
                    v-model="product.img" 
                    :rules='imageRules' 
                    color="purple darken-2" 
                    label='Image link' 
                    required></v-text-field>
                    <div class="card-body">
                        <h3 class="card-title">{{product.title}}</h3>
                        <v-text-field label='Change product name here' 
                        v-model='product.title' 
                        :rules='titleRules' color="deep-purple"></v-text-field>
                        <h4>{{product.price}} $</h4>
                        <v-slider 
                        v-model="product.price" 
                        color="purple darken-2" 
                        min="1"
                        max="100" 
                        :rules='priceRules' 
                        thumb-label></v-slider>
                        <span class='note--description' 
                        v-html='product.text'>{{product.text}}</span>

                        <quill-editor 
                        :options='editorOptions' 
                        v-model='product.text'></quill-editor>

                        <v-btn 
                        v-if='checkValidation' 
                        :disabled='disableButton'
                        @click='updatePost()' 
                        color="success" 
                        class="white--text mt-5" 
                        medium right bottom>
                            Update product
                        </v-btn>
                        <v-alert 
                        :value="true" 
                        v-if='!checkValidation' type="warning">
                            Check your form
                        </v-alert>

                    </div>
                </div>
            </div>
        </div>
        {{checkIfUpdate}} {{checkFormValidation}}
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
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
                        <v-btn color="primary" flat @click="dialog = false, getPost()">
                            back to product list
                        </v-btn>
                    </router-link>
                    <v-btn color="primary" flat @click="dialog = false, getPost()">
                        I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import PostsService from "../../../services/PostsService";

import { quillEditor } from 'vue-quill-editor'
import { quillOptions } from '../../_mixin/quillMixin.js'
import { rules } from '../../_mixin/newProductRules.js'
export default {
  mixins: [quillOptions, rules],
  components: {
    quillEditor,
  },
  data() {
    return {
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
<style>
s {
  color: red;
}
.ql-align-right {
  text-align: right;
}
.ql-align-center {
  text-align: center;
}
.ql-align-justify {
  text-align: justify;
}
</style>
