const jwt = require("jsonwebtoken");
const {SECRET_KEY} = require("../config/config");
const authToken = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    console.log(authHeader,"ddddd");
    
    const token = authHeader;
    if(!token) return res.sendStatus(401);

    jwt.verify(token,SECRET_KEY,(err,user)=>{
        if(err)return res.sendStatus(403);
        console.log(user,"ssss");
        
        req.user = user;
        next();
    })

}
module.exports = authToken