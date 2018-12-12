<template>
  <div id="inspire">
      <br>
      <br> 
      <br>
      <br>
      <br>
      <h1 class='text-center'>Admin dashboard</h1>
 <v-data-table  :headers="mainHeaders"
               :items="orders"
               item-key="name"
               hide-actions
               expand
               class="elevation-1">
  <template slot="items" scope="props">
    <tr >
      <td @click="props.expanded = !props.expanded" class="text-xs click">{{ props.item.name }}</td>
      <td class="text-xs">{{ props.item.order.length }}</td>
      <td class="text-xs">{{ props.item.address }}</td>
      <td class="text-xs">{{ props.item.summary }} $</td>
      <td class="text-xs">{{ props.item.createdAt }} $</td>
      <td class="text-xs">{{ props.item.status }}</td>
      <td class="text-xs"> 
          <router-link 
                  v-bind:to="{ name: 'EachOrder', params: { id: props.item._id} }">click
                  </router-link>
          <!-- <v-switch value input-value="true" color="orange" label="New order"></v-switch>
      <v-switch color='blue' label="Sending" value="Sending"></v-switch>
      <v-switch color="green" label="Arrived" value="Arrive"></v-switch>
      <v-switch color="red" label="Lost" value="Lost"></v-switch> -->
          </td>
    </tr>
  </template>
 </v-data-table>
 <chart :orders='orders'></chart>
</div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import Chart from './_Dashboard/Chart.vue'
    export default {
        name: 'dashboard',
        components: {
            Chart
        },
        data () {
    return {
      mainHeaders: [
        { text: 'name', value: 'name' },
        { text: 'order', value: 'order' },
        { text: 'address', value: 'address'},
        {text: 'price', value: 'price'},
        {text: 'Created At', value: 'created'},
        {text: 'status', value: 'status'},
        {text: 'Detail', value: 'detail'},
      ],
      subHeaders: [
        { text: 'order', value: 'order detail' },
        { text: 'Value', value: 'value' }
      ],
    }
        },
          mounted () {
    this.$store.dispatch('getOrders')
  },
        computed: {
            ...mapGetters([
                'orders'
            ])
        }
    }
</script>

<style lang="scss">
    #inspire {
        max-width: 1200px;
        margin: 0 auto;
    }
    .click {
        cursor: pointer;
    }
    .click:hover {
        background-color: lightblue;
        transition-duration: 0.5s;
    }
</style>