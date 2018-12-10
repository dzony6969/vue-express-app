<template>
<div>
    <div v-if='cart.length > 0'>
        <br>
        <br>
        <br>
        <br>
        <div class="alert alert-info text-center" role="alert">
  You ordered {{cart.length}} item for {{summary}} $
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
        <td class='text-sm'> 
            <v-btn color="red" 
            @click='deleteItem(props.item)'
            dark>Delete
        </v-btn></td>
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
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="Full Name"
              placeholder=""
              required
            ></v-text-field>
            <v-text-field
              ref="address"
              :rules="[
                () => !!address || 'This field is required',
                () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                addressCheck
              ]"
              v-model="address"
              label="Address Line"
              placeholder=""
              counter="25"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              :rules="[() => !!city || 'This field is required', addressCheck]"
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
              v-model.number="zip"
              label="ZIP / Postal Code"
              required
              placeholder=""
            ></v-text-field>
            {{zip}}
            <v-autocomplete
              ref="country"
              :rules="[() => !!country || 'This field is required']"
              :items="countries"
              v-model="country"
              label="Country"
              placeholder="Select..."
              required
            ></v-autocomplete>
          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <p>*this field is not required</p>
          <v-card-actions>
              
            <v-btn flat>Cancel</v-btn>
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
            <v-btn color="primary" flat @click="addOrder()">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    </div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PostsService from '../../services/PostsService.js'
export default {
    data() {
        return {
            headers: [
               {text: 'Title', value: 'title'},
               {text: 'Price', value: 'price'},
               {text: 'Quantity', value: 'quantity'},
               {text: 'Delete'}
            ],
    errorMessages: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    formHasErrors: false,
    countries: ['Poland', 'USA', "France"],
        }
    },
    computed: {
        ...mapGetters([
            'cart',
            'summary'
        ]),

    },
    methods: {
        ...mapActions([
            'deleteItem'
        ]),
        addressCheck () {
      this.errorMessages = this.address && !this.name
        ? 'Hey! I\'m required'
        : ''

      return true
    },
    resetForm () {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    async addOrder () {
      if(this.name.length > 0 && this.address.length > 4 && this.city.length > 3) {
      await PostsService.addOrder({
        order: this.cart,
        name: this.name,
        address: this.address,
        city: this.city,
        zip: this.zip,
        country: this.countries,
        summary: this.summary

      })
      this.$router.push({ name: 'Posts' })
        } else {
          alert('Fill the form')
        }
      },
    }
}
</script>
<style lang="scss">
    #order--table {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>