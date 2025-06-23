const express = require('express')
const app = express();
const PORT = 3000;
const mongoose = require('mongoose')
const userRoute = require('./route/userRoute')

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/mydatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDB connect")
}).catch(err =>{
    console.log("MongoDB connection error: ", err)
})


app.get('/',(req,res) =>{
    res.send('MongoDB is Connected')
})

app.use('/api',userRoute)

app.listen(PORT,()=>{
    console.log(`Server Running on port http://localhost:${PORT}`)
})


