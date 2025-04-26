const express = require('express');
const authRoutes = require("./routes/auth.js")
// const bcrypt= require('bcryptjs');
// const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use('/api/auth',authRoutes);
app.listen(3000,()=>{console.log('server running at 3000');
})


