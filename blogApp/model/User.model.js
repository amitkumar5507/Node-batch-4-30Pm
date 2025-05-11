const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:4,
        unqiue:true,
        maxLength:20,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    bio:String,
    createdAt:{type:Date,default:Date.now()}
})

module.exports = mongoose.model('User',userSchema)