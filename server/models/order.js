const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Order = new Schema({
   order: Array,
   name: String,
   address: String,
   city: String,
   state: String,
   zip: String,
   country: String,
   summary: Number,
   createdAt: { type: Date, default: Date.now },
   status: String,
   randomNum: Number,
},{
   collection: 'orders'
});


module.exports = mongoose.model('Order', Order);