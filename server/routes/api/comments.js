const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const Comment = require('../../models/comments')
const Post = require('../../models/posts')

router.post('/:id/comment', (req, res) => {
    const comment = new Comment(req.body);
    comment
    .save()
    .then(some => {
        return Post.findById(req.params.id)
    })
    .then(post => {
        post.comments.unshift(comment)
        return post.save()
    })
    .catch(err => {
        console.log(err)
    })
})


module.exports = router;
