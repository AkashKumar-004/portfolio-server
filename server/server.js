require('dotenv').config()
const express=require('express')
const cors=require('cors')
const app=express()
const DBCon=require("./CONFIG/db")
const router=require('./routes/projectsRoutes')
app.use(express.json())
const port=process.env.PORT||7778
app.use(cors())
app.use('/projects',router)
app.get('/',(req,res)=>{
    res.json({ message:"message"})
})
app.listen(port,()=>{
    console.log(port)
})