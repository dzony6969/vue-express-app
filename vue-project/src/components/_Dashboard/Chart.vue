<template>
<div>
  <br>
  <br>
  <br>
  <div class='set--width--chart elevation-10 grey lighten-4' >
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
    </v-layout>
    <br>
     <GChart
     class='elevation-15 pa-4'
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
    <div>
 <line-chart 
 class='elevation-15 set--width--chart'
 height='300px'
 width='1000px'
 :data="lineChartValueArray"></line-chart>
 </div>
 <br>
 <br>
 <br> 
 </div>
 </div>
  </div>
</template>

<script>
import { Bar, Line } from 'vue-chartjs'
import { mapGetters } from 'vuex';
export default {
  extends: Bar,

  data() {
    return {
      chartsLib: null, 
      typeDate: new Date().toISOString().substr(0, 10),
      compareDate: '',
      showChart: false, 
      chartValueObject: [],
      chartValueArray: [],
      lineChartValueArray: [],
    };
  },
  async created() {
      await this.$store.dispatch("getOrders");
      await this.getDate(),
      this.convertToArray(),
      this.convertToLineArray(),
      this.filterChart()
  },
  methods: {
   async getDate() {
      const mapDate = await this.orders.map((item) => item.createdAt.substr(0,10))
      const filteredDate = mapDate.filter((value, index) => {
         return mapDate.indexOf(value) == index });
      const mapSum = (el) => this.orders.map((element) => {
           if(el === element.createdAt.substr(0,10)) {
            return element.summary
            }
      })
      const eachDate = filteredDate.forEach(el => {
        this.chartValueObject.push({
          date: el,
          sum: mapSum(el).filter((elem) => {
            if(elem != null) {
            return elem
            }
          }).reduce((prev, cur) => {
            const suma = prev + cur
            return suma
          }, 0)
        })
      })
    },
    convertToArray() {
      let array = this.chartValueObject.map(obj => Object.values(obj));
      array.unshift(['date', 'sum', 'taxes', 'profit'])
      let tax = array.forEach((el) => {
        const taxes = el[1] * 0.23
        const profit = el[1] * 0.77
        el.push(taxes, profit)
      })
      array[0].splice(4, 5)
      return this.chartValueArray = array;
    },
    convertToLineArray() {
      let array = this.chartValueObject.map(obj => Object.values(obj));
      let tax = array.forEach((el) => {
        if(el.sum > 0) {
        const taxes = el[1] * 0.23
        const profit = el[1] * 0.77
        el.push(taxes, profit)
        } 
      })
      return this.lineChartValueArray = array;
    },
    onChartReady (chart, google) {
      this.chartsLib = google
    },
    async filterChart() {
      await this.getDate()
      setTimeout(() => {
      this.chartValueObject.filter((el) => {
        let date = el.date
        if(this.typeDate === date) {
          this.chartValueObject = [
            el,
          ]
          this.convertToArray()
        }
      })
        }, 2000)
    },

  },
  computed: {
    ...mapGetters(['orders']),
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Company Performance',
          subtitle: 'Sale overall per day'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 300,
        width: 1000,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
      })
    }
  }

};
</script>

<style>
.set--width--chart {
  max-width: 1200px;
  margin: 0 auto;
  
}
</style>
