<template>
<div>
<div>
  <br>
    <div v-if='cart.length > 0'>
<v-alert
        :value="true"
        color="info"
        icon="info"
        class='set--width'
        outline
      >
      <div>
       <p>You ordered {{cart.length}} item for {{`${summary.toFixed(2)}$`}}</p> 
        
        <p><strong>
Please fill in the form correctly!</strong></p>
</div>
      </v-alert>
        <div 
         id='order--table'>
         <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              :rules='nameRule'
              label="Full Name"
              :disabled="spinner"  
              placeholder=""
              required
            ></v-text-field>
            <v-text-field
              ref="address"
              v-model="address"
              :rules='addressRule'
              :disabled="spinner"  
              label="Address Line"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              :rules='cityRule'
              :disabled="spinner"  
              label="City"
              required
            ></v-text-field>
            <v-text-field
              ref="state"
              v-model="state"
              :disabled="spinner"  
              label="State/Province/Region*"
            ></v-text-field>
            <v-text-field
              ref="zip"
              v-model.Number="zip"
              :rules='zipRule'
              :disabled="spinner"  
              label="ZIP / Postal Code"
              required
            ></v-text-field>
            <v-text-field
              ref="country"
              v-model="country"
              :rules='countryRule'
              :disabled="spinner"  
              label="Country"
              required
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <p>*this field is not required</p>
          <v-card-actions>
              <router-link to='/shop' >
            <v-btn flat >Back to order</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
            </v-slide-x-reverse-transition>
            <div class="text-xs-center" v-if='spinner'>
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
            </div>
            <v-btn v-if='!spinner' color="primary" 
            :disabled="disableButton"  
            flat 
            @click="addOrder()">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
      <br>
      <br>
      <br>
        <v-data-table
        :headers='headers'
        :items="cart"
        class="elevation-10"
        color='indigo'
    >
      <template slot="items" scope="props">
        <td class='text-sm'>{{props.item.title}}</td>
        <td class='text-sm'>{{props.item.price}} $</td>
        <td class='text-sm'>{{props.item.quantity}}</td>
      </template>
    </v-data-table>
     <br>
     {{checkForm}}
        <br>
    </div>
    </div>
  </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostsService from "../../../services/PostsService.js";
import { rules } from '../../_mixin/newProductRules.js';
export default {
  mixins: [rules],
  data() {
    return {
      headers: [
        { text: "Title", value: "title", sortable: false },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity", sortable: false }
      ],
      name: "",
      nameRule: [v => !!v || "Name is required"],
      disableButton: true,

      randomNum: 0,
      postData: [],
      address: "",
      city: "",
      state: "",
      spinner: false,
      zip: "",
      country: "",
      status: "New order",
      _id: "",
      formHasErrors: false,
      countries: ""
    };
  },
  computed: {
    ...mapGetters(["cart", "summary"]),
    checkForm() {
      if (
        this.name.length > 0 &&
        this.city.length > 0 &&
        this.zip.length > 0 &&
        this.country.length > 0
      ) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    }
  },
  methods: {
    ...mapActions(["deleteItem", "newOrders", "cleanCart"]),
    async addOrder() {
      if (this.name.length > 0) {
        await PostsService.addOrder({
          order: this.cart,
          name: this.name,
          address: this.address,
          city: this.city,
          zip: this.zip,
          country: this.country,
          summary: this.summary,
          status: this.status,
          randomNum: this.getRandomNum()
        });
        this.disableButton = true;
        await this.getId();
        setTimeout(() => {
          this.cleanCart();
          this.newOrders();
          this.$router.push({ name: "UserOrder", params: { id: this._id } });
        }, 7000);
      } else {
        alert("Fill the form");
      }
    },
    getRandomNum() {
      return (this.randomNum = Math.random() * 30);
    },
    async getId() {
      const response = await PostsService.getOrder();
      const mapdata = response.data.map(item => {
        if (item.randomNum === this.randomNum) {
          this._id = item._id;
          this.spinner = true;
        }
      });
    }
  }
};
</script>
<style lang="scss">
#order--table {
  max-width: 80vh;
  margin: 0 auto;
}
.set--width {
  max-width: 60vh;
  margin: 1vh auto;
}
</style>
