const express=require('express')
const router=express.Router();
const Projects=require('../models/ProjectModel')

router.get('/all',async(req,res)=>{
    try{
        const fetchprojects=await Projects.find()
        res.json(fetchprojects).status(200)
    }
    catch(error){
        res.json(error).status(500)
    }
})

router.post('/add',async(req,res)=>{
    try{
        const newprojects=new Projects(req.body)
        const {title,desc}=newprojects
        if(!title||!desc){
            res.status(400)
        }
        const savedata=await newprojects.save()
        res.status(201).json(savedata)
    }
    catch(error)
    {
        console.log(error)
    }
})
router.put('/edits/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const current=Projects.findOne({"_id":id})
        if(!current)
        {
            res.status(404).json("Not found")
        }
        const updatedata=Projects.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedata)
    } catch (error) {
        res.status(500)
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const current=Projects.findOne({_id:id})
        if(!current)
        {
            res.status(404).json("not found")
        }
        const deletedata=Projects.findByIdAndDelete(id)
        res.status(200).json("deleted")
        console.log("hiii")
    } catch (error) {
        res.json(error)
    }
})

module.exports=router;
