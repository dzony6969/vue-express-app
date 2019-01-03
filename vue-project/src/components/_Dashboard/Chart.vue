<template>
<div>
  <br>
  <br>
  <br>
  <v-container sm12 class='set--width--chart elevation-10 grey lighten-4' >
    <br>
    <h1 class='text-center'>Charts overview</h1>
    <br>
    <strong><hr></strong>
<v-layout row wrap >
      <v-flex xs12 offset-sm1 sm5 pl-1>
        <v-date-picker
          ref="picker"
          v-model="typeDate"
          full-width
        ></v-date-picker>
      </v-flex>
      <v-flex xs12 sm5 pl-3>
        <div class="title">Daily news({{ typeDate || 'change month...' }})<v-btn class='info' @click='filterChart()'>Pick date</v-btn></div>
        <div class="subheading">wrap up for selected date</div>
        <div></div>
        <ul>
          <div v-if='chartValueObject.length === 1'>
          <strong><li>Overall amount: {{`${chartValueArray[1][1].toFixed(2)}`}}$</li></strong>
          <strong><li>Tax due: {{`${chartValueArray[1][2].toFixed(2)}`}}$</li></strong>
          <strong><li>Profit: {{`${chartValueArray[1][3].toFixed(2)}`}}$</li></strong>
          </div>
          <div v-if='chartValueObject.length >1'><v-alert
        :value="true"
        type="warning"
      >
        Data not found
      </v-alert></div>
          
        </ul>
      </v-flex>
    
    <br>
    <v-flex>
    <h1 class='text-center'>Daily chart</h1>
     <GChart
     class='elevation-15 pa-5'
    type="ColumnChart"
    :data="chartValueArray"
    :options="chartOptions"
    @ready="onChartReady"
    :createChart="(el, google) => new google.charts.Bar(el)"
    :settings="{packages: ['bar']}"    
  />
  <br>
  <div class='text-center'>
    <br>
    <br>
    <hr>
    <h1>Overall amount per day</h1>
    <br>
 <line-chart 
 class='elevation-15 line--chart'
 height='300px'
 :data="lineChartValueArray"></line-chart>
 <br>
 <br>
  <h1>Overall:</h1>
 <pie-chart :data="lineChartValueArray"></pie-chart>

  <h3 class='alert alert-info'>Amount: {{sumAllAmount.sum}}$</h3>
  <h3 class='alert alert-danger'>Tax due: {{sumAllAmount.tax}}$</h3>
  <h3 class='alert success'>Profit: {{sumAllAmount.profit}}$</h3>
 </div>
 </v-flex>
 </v-layout>
  </v-container>
  </div>
</template>

<script>
import { Bar, Line } from "vue-chartjs";
import { mapGetters } from "vuex";
import { chartSetup } from '../../_mixin/chartMixin/chartSetup.js';
import { sumAll } from '../../_mixin/chartMixin/sumAllData.js';
import {converts} from '../../_mixin/chartMixin/convertToArray.js';
export default {
  mixins: [chartSetup, sumAll, converts],
  extends: Bar,
  data() {
    return {
      typeDate: new Date().toISOString().substr(0, 10),
      compareDate: "",
      showChart: false,

      chartValueObject: [],
      //mixin - convertToArray 
      chartValueArray: [],
      lineChartValueArray: []
    };
  },
  async created() {
    await this.$store.dispatch("getOrders");
    await this.getDate(),
      this.convertToArray(),
      this.convertToLineArray(),
      this.filterChart();
  },
  methods: {
    async getDate() {
      const mapDate = await this.orders.map(item =>
        item.createdAt.substr(0, 10)
      );
      const filteredDate = mapDate.filter((value, index) => {
        return mapDate.indexOf(value) == index;
      });
      const mapSum = el =>
        this.orders.map(element => {
          if (el === element.createdAt.substr(0, 10)) {
            return element.summary;
          }
        });
      const eachDate = filteredDate.forEach(el => {
        this.chartValueObject.push({
          date: el,
          sum: mapSum(el)
            .filter(elem => {
              if (elem != null) {
                return elem;
              }
            })
            .reduce((prev, cur) => {
              const suma = prev + cur;
              return suma;
            }, 0)
        });
      });
    },
    async filterChart() {
      await this.getDate();
      setTimeout(() => {
        this.chartValueObject.filter(el => {
          let date = el.date;
          if (this.typeDate === date) {
            this.chartValueObject = [el];
            this.convertToArray();
          }
        });
      }, 2000);
    }
  },
  computed: {
    ...mapGetters(["orders"]),
  }
};
</script>

<style>
.set--width--chart {
  max-width: 1200px;
  margin: 0 auto;
}
canvas {
  padding: 20px;
}
.line--chart {
  width: 100%;
}
</style>
