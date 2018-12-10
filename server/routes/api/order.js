const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const order = require('../../models/order')

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://luki:lukasz1@ds135290.mlab.com:35290/vuedb', {
        useNewUrlParser: true
    });
    return client.db('vuedb').collection('orders');
}

router.post('/', async (req, res) => {
    try {
    const orders = await loadPostsCollection(order);
    await orders.insertOne({
        order: req.body.order,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        summary: req.body.summary,
        createdAt: new Date()

    })
    res.status(201).send();
} catch (err) {
    console.log(err)
}
  });
  router.get('/', async(req, res, next) => {
    const posts = await loadPostsCollection(order);
    res.send(await posts.find({}).sort({_id: -1}).toArray());
})

  module.exports = router;