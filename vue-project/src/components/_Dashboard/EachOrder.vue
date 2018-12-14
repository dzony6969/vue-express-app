<template>
<v-content>
    <br>
    <br>    
    <br>
    <br>
    <br>
    <br>
       <v-card
      class="mx-auto elevation-20"
      
      max-width="600"
    >
      <v-card-title class="title font-weight-regular justify-space-between">
        order ID:<h3>  <strong>{{order.id}}</strong> </h3>
        <v-avatar
          color="green lighten-2"
          class="subheading white--text"
          size="40"
        ><v-icon>done</v-icon></v-avatar>
      </v-card-title>
          <v-card-text>
              <p class='text-center'>ORDER DETAIL</p>
              <br>
              <br>
              <p>Person: <strong>{{order.name}}</strong></p>
              <p>address: <strong>{{order.address}}, {{order.city}}, {{order.zip}}, {{order.country}}</strong></p>
              <p>Price: <strong>{{order.summary}}$</strong></p>
              <p>Order list:</p>
              <div v-for='item in order.order' :key='item.id'>
                  <router-link v-bind:to="{ name: 'showPost', params: { id: item.id } }" >
                {{` ${item.title} - quantity ${item.quantity}, `}}
                </router-link>
              </div>
              <hr>
              <h4 class='text-center'>Order status</h4>
              <br>
                <p>Current status:  <strong>{{order.status}}</strong></p>
                <hr>
                <h4 class='text-center'>Set status</h4>
                 <v-radio-group 
                 row
                 v-model="order.status">
                    <v-radio
                      v-for='status in statusValue' 
                    :key='status' 
                    :label="status"
                    :value="status"
        ></v-radio>
      </v-radio-group>
          </v-card-text>
          <hr>
          <div class='text-center'>
          <router-link to='/dashboard'>
            <v-btn dark align-center>Back to order list</v-btn>
            </router-link>
            <v-btn dark @click='upPost'>Update posts</v-btn>
          
          </div>
          <br>
        </v-card>
    </v-content>
</template>

<script>
import PostsService from '../../../services/PostsService'
import { mapActions } from 'vuex';

    export default {
        name: 'EachOrder',
        data() {
            return {
                order: {
                    id: '',
                    order: [],
                    name: '',
                    address: '',
                    country: '',
                    city: '',
                    zip: '',
                    summary: '',
                    createdAt: '',
                    status: '',
                },
                statusValue: ['New order', 'Sending', 'on the way', 'package lost']
            }
        },
          mounted () {
              this.getOneOrder()
        },
        methods: {
            ...mapActions([
                'newOrders'
            ]),
        async getOneOrder () {
      try {
      const response = await PostsService.oneOrder({
        id: this.$route.params.id
      })
      this.order.id = response.data._id
      this.order.address = response.data.address
      this.order.order = response.data.order
      this.order.name = response.data.name
      this.order.zip = response.data.zip
      this.order.summary = response.data.summary
      this.order.createdAt = response.data.createdAt
      this.order.status = response.data.status
      this.order.city = response.data.city
      this.order.country = response.data.country
      } catch(err) {
      }
    },
    async upPost() {
        await PostsService.updateOrder({
            id: this.$route.params.id,
            status: this.order.status,
            name: this.order.name
            })
            this.newOrders()
             this.$router.push({ name: 'dashboard' })
        }
     }
    }
    
</script>