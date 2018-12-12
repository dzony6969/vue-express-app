const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  title: {
    type: String
  },
  text: {
    type: String
  },
  img: String,
  price: Number,
  postType: String,
  createdAt: { type: Date, default: Date.now },
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);