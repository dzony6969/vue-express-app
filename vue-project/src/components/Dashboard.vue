<template>
  <div id="inspire">
      <br>
      <br> 
      <br>
      <h1 class='text-center'>Admin dashboard</h1>
     <v-btn color='success' @click='toggle'>Filter by date</v-btn>
        <v-card class='text-center' v-if='!datePopup'>
                <v-date-picker v-model="picker" color="green lighten-1 text-center"></v-date-picker>
            </v-card>
            <v-text-field
              label="Search by name"
              v-model='searchByName'
              single-line
            ></v-text-field>
    
    <!-- {{datePicker}} --> 
 <v-data-table  :headers="mainHeaders"
               :items="datePicker"
               item-key="name"
               hide-actions
               class="elevation-1">
  <template slot="items" scope="props">
    <tr >
      <td @click="props.expanded = !props.expanded" class="text-xs">{{ props.item.name }}</td>
      <td class="text-xs">{{ props.item.order.length }}</td>
      <td class="text-xs">{{ props.item.address }}</td>
      <td class="text-xs">{{ props.item.summary }} $</td>
      <td class="text-xs">{{ `${props.item.createdAt.substring(0, 10)}` }}</td>
      <td dark class="text-xs">
          <span v-if='props.item.status === "New order"' >{{ props.item.status }} <v-icon color="blue darken-2">info</v-icon></span>
          <span v-if='props.item.status === "Sending"' > {{ props.item.status }} <v-icon color="yellow darken-2">check_circle</v-icon></span>
          <span v-if='props.item.status === "package lost"' > {{ props.item.status }} <v-icon color="red darken-2">error</v-icon></span>
          <span v-if='props.item.status === "on the way"' > {{ props.item.status }} <v-icon color="green darken-2">send</v-icon></span>
      </td>
      
      <td class="text-xs"> 
          <router-link 
                  v-bind:to="{ name: 'EachOrder', params: { id: props.item._id} }">
                    <v-btn outline fab color="indigo">
                    <v-icon>edit</v-icon>
                </v-btn>
          
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

import moment from 'moment'
import DateRange from 'vuetify-daterange-picker';
    export default {
        name: 'dashboard',
        components: {
            Chart,
        },
        data () {
            return {
                    picker: new Date().toISOString().substr(0, 10),
                    datePopup: true,
                    searchByName: '',
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
        methods: {
            toggle() {
                this.datePopup= !this.datePopup
            },
        },
        computed: {
            ...mapGetters([
                'orders'
            ]),
            filterDate() {
               let dataFormat = this.orders.map(date => date.createdAt.substring(0, 10))

            },
            datePicker() {
               const orderList = this.orders.filter(item => {
                    let date = item.createdAt.substring(0, 10)
                    let searchInput = item.name.toLowerCase()
                    .includes(this.searchByName.toLowerCase())
                    if(this.picker === date && !this.datePopup) {
                        return searchInput
                    } else if (this.datePopup) {
                        return searchInput
                    } 
                })
                return orderList
            },
        }
}
</script>

<style lang="scss">
    #inspire {
        max-width: 1200px;
        margin: 0 auto;
    }

    .click {
        color: lightblue;
        border-radius: 50%;
    }
    a {
        text-decoration: none;
    }
</style>