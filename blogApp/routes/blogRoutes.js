const express = require('express');
const router = express.Router();
const User = require('../model/User.model');
const Post = require('../model/Post.model');
const Comment = require('../model/Comment.model');
let validator = require('validator');


router.post('/users',async(req,res)=>{
        const {name,email,bio} = req.body;
        if(! validator.isEmail(email)){
          return  res.send("plz enter vaild email")
        }
    const user = await User.create(req.body);
   return res.json({
        status:true,
        user
    })
})

router.post('/posts', async(req,res)=>{
    const post = await Post.create(req.body);
    res.json({
        status:true,
        post})
})

router.get('/posts', async(req,res)=>{
    const posts= await Post.find().populate('author');
    res.json({
        status:true,
        posts
    })
})

router.get('/posts/:id', async(req,res)=>{
    const posts= await Post.findById(req.params.id).populate('author');
    res.json({
        status:true,
        posts
    })
})
router.put('/posts/:id', async(req,res)=>{
    const posts= await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({
        status:true,
        posts
    })
})
// comments 
 router.post('/comments',async(req,res)=>{
    let comment = await Comment.create(req.body);
    res.json({
        status:true,
        comment
    })
 })
 router.get('/comments/by-post/:postId',async(req,res)=>{
    const comments = await Comment.find({post:req.params.postId})
    res.json({
        status:true,
        comments
    })
 })
module.exports = router