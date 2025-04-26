const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../model/userModel');
const {SECRET_KEY} = require('../config/config');

exports.signup = async (req,res)=>{
    const {userName,password} = req.body;
    const existingUser = users.find((u)=>u.userName === userName);
    if(existingUser){
        return res.status(400).json({
            message:"user already exist"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = {id:users.length +1,userName,password:hashedPassword}
    users.push(newUser);
    res.json({
        message:'user registered successfully'
    })
}
exports.login = async (req,res)=>{
    const {userName,password} = req.body;
    const user = users.find((u)=>u.userName === userName);
    if(!user){
        return res.status(400).json({
            message:"user not found"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({
            message:"invalid cred"
        })
    }
    const token = jwt.sign({id:user.id,userName},SECRET_KEY,{expiresIn:'1min'})
    res.json({token })
}

exports.protected = (req,res)=>{
    res.json({
        message:"access to protected route",user: req.user
    })
}