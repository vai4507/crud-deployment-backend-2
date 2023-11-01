const express=require('express');
const studentSchema = require('../model/studentSchema');
const studentRoute=express.Router();
const mongoose=require('mongoose');

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
        {
            return err;
        }
        else
        {
            res.json(data);
        }
    })    
})
studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    }
    )
})

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

//OR
//studentRoute.get("/update-student/:id")
//studentRoute.put("/update-student/:id")

//_id-653f75fb4805f96e89e723c2 object id of Raj
//http://localhost:4000/studentRoute/update-student/653f75fb4805f96e89e723c2
module.exports=studentRoute;