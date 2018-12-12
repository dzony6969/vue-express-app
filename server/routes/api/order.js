const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
// const order = require('../../models/order')
let Order = require('../../models/order')

// async function loadPostsCollection() {
//     const client = await mongodb.MongoClient.connect
//     ('mongodb://luki:lukasz1@ds135290.mlab.com:35290/vuedb', {
//         useNewUrlParser: true
//     });
//     return client.db('vuedb').collection('orders');
// }

router.route('/').post(function (req, res) {
    let orders = new Order(req.body);
    orders.save()
      .then(() => {
        res.status(200).json({'business': 'business in added successfully'});
      })
      .catch(() => {
        res.status(400).send("unable to save to database");
      });
  });
  router.route('/').get(function (req, res) {
    Order.find(function(err, orders){
    if(err){
      res.json(err);
    }
    else {
      res.json(orders);
    }
  });
});
router.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Order.findById(id, function (err, orders){
        if(err) {
          res.json(err);
        }
        res.json(orders);
    });
  });
  router.route('/update/:id').put(function (req, res) {
    Order.findById(req.params.id, function(err, order) {
    if (!order)
      res.status(404).send("data is not found");
    else {
        order.name = req.body.name
        order.status = req.body.status
        order.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


  module.exports = router;