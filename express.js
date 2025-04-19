const express = require('express')
const app = express()
let product = [];
let id=1;

app.use(express.json())
// respond with "hello world" when a GET request is made to the homepage
app.get('/products', (req, res) => {
  res.json({
    status:true,
    data:product
  })
})
app.post('/addProduct',(req,res)=>{
    // console.log(req.body,"ssss");
    
    let {name,qty,title,price,description,img} = req.body;
    product.push({id:id++,name,qty,title,price,description,img})
    res.send({
        status:true,
        message:"data inserted successfully"
    })
    // console.log({name,qty,title,price,description,img},"dddd");
    
})



app.listen(4000,()=>{
    console.log('server is running on 4000');
    
})