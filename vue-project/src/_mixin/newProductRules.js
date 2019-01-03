export const rules = {
    data() {
        return {
            titleRules: [
                v => !!v || "Name is required",
                v =>
                  (v && v.length > 1) || "Name must be atleast more than 1 characters"
              ],
              textRules: [
                v => !!v || "Description is required",
                v => (v && v.length > 10) || "To short. Atleast 10 characters"
              ],
              imageRules: [
                v =>
                  (v && v.match(/\.(jpeg|jpg|gif|png)$/)) ||
                  "this is not correct URL. Make sure URL ends with .jpeg .jpg .gif or .png "
              ],
              priceRules: [
                // (v) => !!v || 'Name is required',
                v =>
                  (v && v >= 1 && v <= 100) ||
                  "You need to setup price between 1$ or 100$"
              ],
              //payment rules
              postTypeRule: [v => (v && v.length > 0) || "Choose category"],
              addressRule: [v => !!v || "Address is required"],
              cityRule: [v => !!v || "City is required"],
              zipRule: [v => !!v || "ZIP code is required"],
              countryRule: [v => !!v || "Country is required"],
        }
    }
}