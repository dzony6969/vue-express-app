const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
//get posts
const Post = require('../../models/posts')
const Comment = require('../../models/posts')

router.route('/').post(function (req, res) {
    let post = new Post(req.body);
    post.save()
    post.comments.push(Comment)
      .then(() => {
        res.status(200).json({});
      })
      .catch(() => {
        res.status(400).send("unable to save to database");
      });
  });
  router.route('/').get(function (req, res) {
    Post.find(function(err, posts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts)
    }
  }).sort({_id: -1});
});

//add posts
// router.post('/', async (req, res) => {
//     try {
//     const posts = await loadPostsCollection();
//     await posts.insertOne({
//       text: req.body.text,
//       title: req.body.title,
//       img: req.body.img,
//       price: req.body.price,
//       postType: req.body.postType,
//       createdAt: new Date()
//     });
//     res.status(201).send();
//     } catch (error) {
//         console.log(error)
//     }
//   });

//     router.get('/', async(req, res, next) => {
//         const posts = await loadPostsCollection();
//         res.send(await posts.find({}).sort({_id: -1}).toArray());
// })



//   router.get('/:id',async (req, res) => {
//     const posts = await loadPostsCollection();
//     const data = await posts.findOne({ _id: new mongodb.ObjectID(req.params.id) });
//     return res.send(data);
// })
// router.route('/:id').get(function (req, res) {
//     let id = req.params.id;
//     Post.findById(id).populate('comments', function (err, post){
//         if(err) {
//           res.json(err);
//         }
//         res.json(post);
//     });
//   });

  router.get('/:id', (req, res) => {
    Post.findById(req.params.id).populate('comments').exec(function (err, post) {
        if(!err) {
          console.log(post)
            res.json(post)
        }
    })    

});
//delete posts
// router.delete('/:id', async (req, res) => {
//     try {
//     const posts = await loadPostsCollection();
//     await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
//     return res.status(200).send();
//     } catch(error) {
//         console.log(error)
//     }
//   });
router.route('/delete/:id').delete(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

// async function loadPostsCollection() {
//     const client = await mongodb.MongoClient.connect
//     ('mongodb://luki:lukasz1@ds135290.mlab.com:35290/vuedb', {
//         useNewUrlParser: true
//     });
//     try {
    
//     return client.db('vuedb').collection('posts');
// } catch (error) {
//     console.log(error)
//     }
// }



module.exports = router;