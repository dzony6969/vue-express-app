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
          <strong><li>Overall amount: {{chartValueArray[1][1]}}$</li></strong>
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
export default {
  extends: Bar,

  data() {
    return {
      chartsLib: null,
      typeDate: new Date().toISOString().substr(0, 10),
      compareDate: "",
      showChart: false,
      chartValueObject: [],
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
    convertToArray() {
      let array = this.chartValueObject.map(obj => Object.values(obj));
      array.unshift(["date", "sum", "taxes", "profit"]);
      let tax = array.forEach(el => {
        const taxes = el[1] * 0.23;
        const profit = el[1] * 0.77;
        el.push(taxes, profit);
      });
      array[0].splice(4, 5);
      return (this.chartValueArray = array);
    },
    convertToLineArray() {
      let array = this.chartValueObject.map(obj => Object.values(obj));
      let tax = array.forEach(el => {
        if (el.sum > 0) {
          const taxes = el[1] * 0.23;
          const profit = el[1] * 0.77;
          el.push(taxes, profit);
        }
      });
      return (this.lineChartValueArray = array);
    },
    onChartReady(chart, google) {
      this.chartsLib = google;
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
    chartOptions() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: "Company Performance",
          subtitle: "Sale overall per day",
          fill: "#1b9e77"
        },
        bars: "horizontal", // Required for Material Bar Charts.
        hAxis: { format: "decimal" },
        backgroundColor: {
          fill: "#f5f5f5"
        },
        colors: ["#1b9e77", "#d95f02", "#7570b3"]
      });
    },
    sumAllAmount() {
      let filterOrders = this.orders.map(item => item.summary)
      let sum = filterOrders.reduce((prev, cur) => {
        return prev + cur 

      }, 20)
      sum = sum.toFixed(2)
      const tax = (sum * 0.23).toFixed(2)
      const profit = (sum * 0.77).toFixed(2)
      const overall = {
        sum,
        tax,
        profit
      }
      return overall
      // let array = this.orders.map(obj => Object.values(obj.summary));
      // console.log(array)
      
    }
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
