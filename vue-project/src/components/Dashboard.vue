<template>
    <div id="inspire">
        <br>
        <br>
        <br>
        <div class='text-center'>
            <v-btn x-large round color='success' @click='toggle'>Filter by date</v-btn>
        </div>
        <v-card class='text-center' v-if='!datePopup'>
            <v-date-picker v-model="picker" color="green lighten-1 text-center"></v-date-picker>
        </v-card>
        <v-container row>

            <v-flex pa-4 sm12 md4 lg4>
                <v-text-field label="Search by name" v-model='searchByName' single-line></v-text-field>
            </v-flex>
            <v-flex pa-2 sm12 md8 lg8>
                <h3>Icons legend:</h3>
                <p>
                    <v-icon class='icon--order' color="blue darken-2">info</v-icon> - <strong>New order</strong>
                    <v-icon class='icon--order' color="yellow darken-2">check_circle</v-icon> - <strong>Sending</strong>
                    <v-icon class='icon--order' color="green darken-2">send</v-icon> - <strong>On the way</strong>
                    <v-icon class='icon--order' color="red darken-2">error</v-icon> - <strong>Package lost</strong>
                </p>
            </v-flex>
            <v-flex>
                <div class='alert alert-success text-center alert--connect elevation-5'>
                    <h4>ALL ORDERS</h4>
                </div>
                <v-data-table 
                :headers="mainHeaders" 
                :items="datePicker" 
                item-key="name" 
                :pagination.sync="pagination" 
                :rows-per-page-items="pagination.rowsPerPageItems" 
                :total-items="pagination.totalItems" class="elevation-1">
                    <template slot="items" scope="props">
                        <tr>
                            <td @click="props.expanded = !props.expanded" class="text-xs">{{ props.item.name }}</td>
                            <td class="text-xs">{{ props.item.order.length }}</td>
                            <td class="text-xs">{{ props.item.address }}</td>
                            <td class="text-xs">{{ props.item.summary }} $</td>
                            <td class="text-xs">{{ `${props.item.createdAt.substring(0, 10)}` }}</td>
                            <td dark class="text-xs">
                                <span v-if='props.item.status === "New order"'><v-icon color="blue darken-2">info</v-icon></span>
                                <span v-if='props.item.status === "Sending"'><v-icon color="yellow darken-2">check_circle</v-icon></span>
                                <span v-if='props.item.status === "package lost"'> <v-icon color="red darken-2">error</v-icon></span>
                                <span v-if='props.item.status === "on the way"'>  <v-icon color="green darken-2">send</v-icon></span>
                            </td>
                            <td class="text-xs">
                                <router-link v-bind:to="{ name: 'EachOrder', params: { id: props.item._id} }">
                                    <v-btn outline fab color="indigo">
                                        <v-icon>edit</v-icon>
                                    </v-btn>
                                </router-link>
                            </td>
                        </tr>
                    </template>
                </v-data-table>

            </v-flex>
        </v-container>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "dashboard",
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      datePopup: true,
      searchByName: "",
      pagination: {
          descending: true,
          page: 1,
          rowsPerPage: 5,
          totalItems: 0,
          rowsPerPageItems: [5, 10, 15, 20, 25]
    },
      mainHeaders: [
        { text: "NAME", value: "name", sortable: false },
        { text: "ORDER", value: "order" },
        { text: "ADDRESS", value: "address", sortable: false },
        { text: "AMOUNT", value: "price", sortable: false },
        { text: "CREATED AT", value: "created" },
        { text: "STATUS", value: "status" },
        { text: "DETAIL", value: "detail", sortable: false }
      ],
      subHeaders: [
        { text: "order", value: "order detail" },
        { text: "Value", value: "value" }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getOrders");
  },
  methods: {
    toggle() {
      this.datePopup = !this.datePopup;
    }
  },
  computed: {
    ...mapGetters(["orders"]),
    datePicker() {
      const orderList = this.orders.filter(item => {
        let date = item.createdAt.substring(0, 10);
        let searchInput = item.name
          .toLowerCase()
          .includes(this.searchByName.toLowerCase());
        if (this.picker === date && !this.datePopup) {
          return searchInput;
        } else if (this.datePopup) {
          return searchInput;
        }
      });
      return orderList;
    }
  }
};
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
.icon--order {
  margin: 0px 3px 0 3px;
}
.alert--connect {
  margin: 0 auto -10px auto;
  width: 90%;
  color: #F5F5F5;
  border-color: transparent;
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(40,140,0,1)), color-stop(11%, rgba(40,140,0,1)), color-stop(100%, rgba(0,128,128,1)));
}
</style>
