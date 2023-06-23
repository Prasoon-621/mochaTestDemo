require('dotenv').config()
const express = require('express')
const mongoose=require('mongoose')
const app=express();
const workouts=require('./Router/workout')
mongoose.set('strictQuery', false);

app.use(express.json())
app.use('/api/workouts',workouts)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("mongoose connected")
  app.listen(process.env.PORT,()=>{
   console.log("listening on Port",process.env.PORT)
})
})
.catch((error)=>{
   console.log(error)
})

