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
  price: String,
  postType: String,
  createdAt: Date,
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);