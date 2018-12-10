const mongoose = require('mongoose');


var orderSchema = new mongoose.Schema({
   order: [],
   name: String,
   address: String,
   city: String,
   state: String,
   zip: String,
   country: String,
    
})


module.exports = mongoose.model("order", orderSchema);