const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB||"mongodb+srv://user:17112004akash@in-aws.dmmxb.mongodb.net/?retryWrites=true&w=majority&appName=in-AWS")

 const connection=mongoose.connection;

 connection.on('connected',()=>console.log("DB connected"))

 connection.on('error',()=>console.log("error"))
 
 module.exports=mongoose