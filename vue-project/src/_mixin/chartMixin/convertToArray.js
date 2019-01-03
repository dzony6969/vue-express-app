export const converts = {
    methods: {
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
            return (this.lineChartValueArray = array);
          },
    }
}