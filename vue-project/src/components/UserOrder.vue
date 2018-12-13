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
        <h3> Your order has been successfully sent!</h3>
        <v-avatar
          color="green lighten-2"
          class="subheading white--text"
          size="40"
        ><v-icon>done</v-icon></v-avatar>
      </v-card-title>
          <v-card-text>
              <p>Order detail:</p>
              <p>Person: <strong>{{order.name}}</strong></p>
              <p>address: <strong>{{order.address}}, {{order.city}}, {{order.zip}}, {{order.country}}</strong></p>
              <p>Price: <strong>{{order.summary}}$</strong></p>
              <h3 red>To check your order status copy and paste this ID in order status dashboard:</h3>
              <h4 class='text-center info'> {{order.id}} </h4>
              <hr>
              <h3 class='text-center'>status: <strong>{{order.status}}</strong></h3>
          </v-card-text>
          <hr>
          <div class='text-center'>
          <router-link to='/posts'>
            <v-btn dark align-center>Back to shop</v-btn>
            </router-link>
            <router-link to='/checkorder'>
            <v-btn dark>Check your order</v-btn>
            </router-link>
          
          </div>
          <br>
        </v-card>
    </v-content>
</template>

<script>
import PostsService from '../../services/PostsService'

    export default {
        name: 'UserOrder',
        data() {
            return {
                order: {
                    id: '',
                    order: [],
                    name: '',
                    address: '',
                    city: '',
                    zip: '',
                    summary: '',
                    createdAt: '',
                    status: '',
                    country: '',
                }
            }
        },
          mounted () {
              this.getOneOrder()
        },
        methods: {
        async getOneOrder () {
      try {
      const response = await PostsService.oneOrder({
        id: this.$route.params.id
      })
      this.order.id = response.data._id
      this.order.address = response.data.address
      this.order.city = response.data.city
      this.order.country = response.data.country
      this.order.order = response.data.order
      this.order.name = response.data.name
      this.order.zip = response.data.zip
      this.order.summary = response.data.summary
      this.order.createdAt = response.data.createdAt
      this.order.status = response.data.status
      } catch(err) {
        console.log(err)
            }
        },
    }
}
    
</script>