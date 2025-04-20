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
app.get('/product/:id',(req,res)=>{
    let {id} = req.params;
    console.log(req.params);
    
    let prod= product.find((val)=> val.id == id )
    res.send({
        status:true,
        data:prod
    })
})

app.put('/product/:id',(req,res)=>{
    let {id} = req.params;
    let index =product.findIndex((val)=>val.id == id)
    if(index !==-1){
        product[index] = { ...product[index],...req.body }
    }
    res.send({
        status:true,
        data:product[index]
    })
})
app.delete('/product/:id',(req,res)=>{
    let {id} = req.params;
   let isExist = product.find((val)=>val.id == id)
   if(isExist){
    product= product.filter((val)=>val.id != id)
    res.send({
        status:false,
        data:product
    })

   }
   else{
    res.send({
        status:false,
        message:"product not found"
    })
   }
})




app.listen(4000,()=>{
    console.log('server is running on 4000');
    
})