const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    }
})

const usermodel=mongoose.model("usermodel",userschema)
module.exports=usermodel;