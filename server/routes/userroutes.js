const express=require('express')
const router=express.Router()
import usermodel from '../models/userModel'

router.get('/',(req,res)=>{
    try {
        const fetchdata=usermodel.find()
        res.status(200)
    } catch (error) {
        res.status(400)
    }
})