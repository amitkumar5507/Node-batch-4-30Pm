
const products = require('../model/productModel');

exports.getProduct = (req,res)=>{
    if(products.length ==0){
       return  res.status(400).json({
            message:"no product found"
        })
    }
    return res.status(200).json({
        data:products
    })

}