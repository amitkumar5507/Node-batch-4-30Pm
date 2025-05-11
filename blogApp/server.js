const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes')
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://preetam:preetam@cluster0.wg3g3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("successfully connected");
    
}).catch((err)=>console.log(err)
)

app.use('/api', blogRoutes)

app.listen(4001,()=>{
    console.log("running on 4001");
    
})