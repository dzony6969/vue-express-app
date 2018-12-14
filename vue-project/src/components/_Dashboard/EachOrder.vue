<template>
<v-content>
    <v-container>
    <br>
    <br>
    <br>
    <br>
        {{order.id}}
        <br>
        {{order.address}}
        <br>
        {{order.order}}
        <br>
        {{order.name}}
        <br>
        {{order.zip}}
        <br>
        {{order.summary}}
        <br>
        {{order.createdAt}}
        <br>
        <input type="text" v-model='order.name'>
        <input type="text" v-model='order.status'>
        <button class="app_post_btn" @click="upPost()">Update</button>
        </v-container>
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
                    city: '',
                    zip: '',
                    summary: '',
                    createdAt: '',
                    status: '',
                }
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