const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const MONGO_URL = 'mongodb://luki:lukasz1@ds135290.mlab.com:35290/vuedb'
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

//routes
const posts = require('./routes/api/posts.js');
const order = require('./routes/api/order')
const comment = require('./routes/api/comments')
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/posts', posts);
app.use('/api/order', order);
app.use('/api/posts', comment)

// mongoconnect
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  }

//locals
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(__dirname + `Server started on port ${port}` ));
