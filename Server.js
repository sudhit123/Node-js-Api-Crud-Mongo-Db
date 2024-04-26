const express = require('express')
const mongoose = require('mongoose')
const userRoute=require('./routes')
mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected successfully");
});

const app=express()
app.use(express.json())
app.use('/userData',userRoute) 
app.listen(3000,()=>{
    console.log('SERVER RUNNING......')
})
