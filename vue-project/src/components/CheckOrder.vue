<template>
<div>
    <br>
    <br>
    <br>
    <br>

  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card-title class="title font-weight-regular justify-space-between">

      <h3 class='text-center'> Check your order status here</h3>
    </v-card-title>
        <v-card-text>
          <v-text-field
            label="Order ID"
            v-model='id'
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            example: '163213267913276'
          </span>
        </v-card-text>
    
        <div class='text-center'>
        <v-btn large v-if='id.length < 24'  class='success' disabled>ID is to short</v-btn>
        <v-btn large v-else-if='id.length === 24' @click='checkOrder()'  class='success' >Check your order</v-btn>
        <v-btn large v-else-if='id.length > 24'  class='success' disabled>ID is to long</v-btn>
        </div>
        <br>
            <transition 
            mode='out-in'
            enter-active-class="animated fadeInDown" 
            leave-active-class="animated fadeOutDown"
            >
        <div v-if='errorMsg' class="alert alert-danger text-center" role="alert">
        <strong>Order</strong> doesn't exist, try again!
    </div>
        </transition>
        <br>
  </v-card>
  
  </div>
</template>
<script>
import PostsService from '../../services/PostsService'
    export default {

        data() {
            return {
                id: '',
                orderIds: [],
                errorMsg: false,
            }
        },
        mounted() {
            this.getId()
        },
        methods: {
            checkOrder() {
                const checkId = this.orderIds.filter(item => {
                if(item === this.id) {
                    this.$router.push({name: 'UserOrder', params: { id: this.id} }) 
                    } else if(item != this.id) {
                            this.errorMsg = true;
                        setTimeout(() => {
                            this.errorMsg = false;
                        }, 5000)
                    }
                    })
            },
            async getId() {
                const response = await PostsService.getOrder()
                const mapdata = response.data.map(item => item._id)  
                this.orderIds = mapdata
            }
        }
    }
</script>
