<template>
<div>
<div>
    <div v-if='cart.length > 0'>
        <br>
        <br>
        <br>
        <br>
        <div class="alert alert-info text-center" role="alert">
  You ordered {{cart.length}} item for {{`${summary.toFixed(2)}$`}}
</div>
        <div 
         id='order--table'>
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
        <br>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              :error-messages="errorMessages"
              label="Full Name"
              placeholder=""
              required
            ></v-text-field>
            <v-text-field
              ref="address"
              v-model="address"
              label="Address Line"
              placeholder=""
              counter="25"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              label="City"
              placeholder=""
              required
            ></v-text-field>
            <v-text-field
              ref="state"
              v-model="state"
              label="State/Province/Region*"
              placeholder=""
            ></v-text-field>
            <v-text-field
              ref="zip"
              v-model.Number="zip"
              label="ZIP / Postal Code"
              required
              placeholder=""
            ></v-text-field>
            {{zip}}
            <v-text-field
              ref="country"
              v-model="country"
              label="Country"
              placeholder="Country"
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
              <v-tooltip
                v-if="formHasErrors"
                left
              >
                <v-btn
                  slot="activator"
                  icon
                  class="my-0"
                  @click="resetForm"
                >
                  <v-icon>refresh</v-icon>
                </v-btn>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <div class="text-xs-center" v-if='spinner'>
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
            </div>
            <v-btn v-if='!spinner' color="primary" :disabled="disableButton"  flat @click="addOrder(), getId()">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    </div>
    </div>
  </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostsService from "../../../services/PostsService.js";
export default {
  data() {
    return {
      headers: [
        { text: "Title", value: "title" },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" }
      ],
      errorMessages: "",
      name: "",
      disableButton: false,
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
    ...mapGetters(["cart", "summary"])
  },
  methods: {
    ...mapActions(["deleteItem", "newOrders", "cleanCart"]),
    async addOrder() {
      this.disableButton = true;
      if (
        this.name.length > 0 &&
        this.address.length > 4 &&
        this.city.length > 3
      ) {
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
        await this.cleanCart();
        await this.newOrders();
          this.$router.push({ name: "UserOrder", params: { id: this._id } });
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
  max-width: 1000px;
  margin: 0 auto;
}
</style>
