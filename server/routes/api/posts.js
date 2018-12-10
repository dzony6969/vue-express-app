const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
//get posts
router.get('/', async(req, res, next) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).sort({_id: -1}).toArray());
})


//add posts
router.post('/', async (req, res) => {
    try {
    const posts = await loadPostsCollection();
    await posts.insertOne({
      text: req.body.text,
      title: req.body.title,
      img: req.body.img,
      price: req.body.price,
      postType: req.body.postType,
      createdAt: new Date()
    });
    res.status(201).send();
    } catch (error) {
        console.log(error)
    }
  });

//delete posts
router.delete('/:id', async (req, res) => {
    try {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
    } catch(error) {
        console.log(error)
    }
  });

async function loadPostsCollection() {
    try {
    const client = await mongodb.MongoClient.connect
    ('mongodb://luki:lukasz1@ds135290.mlab.com:35290/vuedb', {
        useNewUrlParser: true
    });
    return client.db('vuedb').collection('posts');
} catch (error) {
    console.log(error)
    }
}

router.get('/:id',async (req, res) => {
    const posts = await loadPostsCollection();  
    const data = await posts.findOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.send(data);
})

module.exports = router;