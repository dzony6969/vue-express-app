<template>
<div>
    <br>
    <br>
    <h1 class='text-center'>Products in store</h1>
    <v-dialog v-model="dialogs" max-width="500px">
      <v-card slot='activator' class='elevation-20' id='ustawTenJebanyMargin'>
    <v-btn color="primary" dark class="m-auto">New Item</v-btn>
    </v-card>
    <v-card>
        <v-card-title>
        <span class="headline"></span>
        </v-card-title>
        <v-card-text>
        <v-container grid-list-md>
          <p v-if='!selectForm' class='alert alert-info'>You can add product with this form or move to product creator</p>
            <router-link to='/new'> <v-btn color='primary'>Move to creator</v-btn> </router-link>
            <v-btn @click='selectForm = true' class='primary'>Use local form</v-btn>
            <v-layout v-if='selectForm' wrap>
            <v-flex xs12>
                <v-text-field 
                v-model='product.title' 
                :rules='product.titleRules'
                label="Product name"></v-text-field>
            </v-flex>
            <v-flex xs12>
                <v-textarea
          v-model="product.text"
          :rules='product.textRules'
          auto-grow
          box
          label="Description"
          rows="2"
        ></v-textarea>
            </v-flex>
            <v-flex xs12>
                <v-text-field 
                v-model='product.img' 
                :rules='product.imageRules'
                label="Image link"></v-text-field>
            </v-flex>
            <v-flex xs12>
                 <v-slider
                v-model="product.price"
                :rules='product.priceRules'
                :label="`price: ${product.price}$`"
                hint="Nie przesadzaj"
                min="1"
                max="100" 
                thumb-label
              ></v-slider>
            </v-flex>
            <v-flex xs12>
                <v-radio-group class='text-center' 
                :rules='product.postTypeRule'
                v-model="product.postType" row>
                <v-radio
                  v-for='item in items'
                  :key='item' 
                  :label='item'
                  color="purple darken-2"
                  :value='item'
                ></v-radio>
         </v-radio-group>
            </v-flex>
            </v-layout>
        </v-container>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        {{checkForm}}
        <v-btn color="blue darken-1" flat @click.native='setDialog()'>Cancel</v-btn>
        <v-btn color="blue darken-1" :disabled='disableButton' v-if='selectForm' flat @click="addPost()">Save</v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
    <v-data-table :headers="headers" :items="posts" hide-actions class="elevation-3 data--table">
    <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-left">{{ props.item.price }}</td>
        <td class="text-xs-left">{{ props.item.postType }}</td>
        <td class="justify-left layout px-0">
        <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-btn slot='activator'
         icon 
         class="error"
         fab medium

         >
         <v-icon>delete</v-icon>
        </v-btn>
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Deleting item from shop
          </v-card-title>
  
          <v-card-text>
              Are you sure about deleting this product?
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="error" @click="deletePost(props.item._id), setDialog()">
              Delete
            </v-btn>
            <v-btn dark @click='setDialog()'>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
        </td>
        <td><router-link 
                  v-bind:to="{ name: 'editPost', params: { id: props.item._id } }">
                    <v-btn outline fab color="indigo">
                    <v-icon>edit</v-icon>
                </v-btn>
          
                  </router-link></td>
    </template>
    </v-data-table>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PostsService from "../../../services/PostsService";
export default {
  data() {
    return {
      dialog: false,
      dialogs: false,
      selectForm: false,
      disableButton: true,
      headers: [
        {
          text: "Product name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Price", value: "price" },
        { text: "Category", value: "postType" },
        { text: "Delete", value: "name", sortable: false },
        { text: "Edit", value: "idk", sortable: false }
      ],
      product: {
        title: "",
        titleRules: [
          v => !!v || "Name is required",
          v =>
            (v && v.length > 1) || "Name must be atleast more than 1 characters"
        ],
        text: "",
        textRules: [
          v => !!v || "Description is required",
          v => (v && v.length > 10) || "To short. Atleast 10 characters"
        ],
        img: "",
        imageRules: [
          v =>
            (v && v.match(/\.(jpeg|jpg|gif|png)$/)) ||
            "this is not correct URL. Make sure URL ends with .jpeg .jpg .gif or .png "
        ],
        price: "",
        priceRules: [
          // (v) => !!v || 'Name is required',
          v =>
            (v && v >= 1 && v <= 100) ||
            "You need to setup price between 1$ or 100$"
        ],
        postType: "",
        postTypeRule: [v => (v && v.length > 0) || "Choose category"]
      },
      items: ["Nature", "Devices", "Plants"]
    };
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    ...mapState(["posts"]),
    checkForm() {
      if (
        this.product.title.length > 1 &&
        this.product.text.length > 10 &&
        this.product.img.match(/\.(jpeg|jpg|gif|png)$/) &&
        this.product.price > 0 &&
        this.product.postType.length > 0
      ) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    }
  },
  methods: {
    ...mapActions(["deletePost"]),
    setDialog() {
      this.dialog = false;
      this.dialogs = false;
    },
    async addPost() {
      await PostsService.addPost({
        title: this.product.title,
        text: this.product.text,
        img: this.product.img,
        price: this.product.price,
        postType: this.product.postType
      });
      setTimeout(() => {
        this.$store.dispatch("getPosts");
        this.dialogs = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss">
.data--table {
  max-width: 1100px;
  margin: 0 auto;
}
.data--button {
  margin: 0 auto;
}
#ustawTenJebanyMargin {
  margin: 0px auto;
}
</style>
