const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const MONGO_URL = 'mongodb://luki:lukasz1@ds135290.mlab.com:35290/vuedb'

//routes
const posts = require('./routes/api/posts.js');
const order = require('./routes/api/order')
//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api/posts', posts);
app.use('/api/order', order);
//mongoconnect
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static('C:\Users\OEM\Desktop\mevvn\server\public'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile('C:\Users\OEM\Desktop\mevvn\server\public\index.html'));
  }

//locals
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(__dirname + `Server started on port ${port}` ));
