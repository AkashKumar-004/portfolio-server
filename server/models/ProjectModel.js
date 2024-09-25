const mongoose=require('mongoose')
// {
//     "title": "title 1",
//     "coverimg": "https://loremflickr.com/640/480/cats",
//     "desc": "desc 1",
//     "link": "link 1",
//     "id": "1"
//   }
const Projectschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    coverimg:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})
const Projects=mongoose.model("Projects",Projectschema)
module.exports=Projects;