export const chartSetup = {
        data() {
            return {
                chartsLib: null,
            }
        },
        methods: {
            onChartReady(chart, google) {
                this.chartsLib = google;
              },
        },
        computed: {
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
    }
    
}