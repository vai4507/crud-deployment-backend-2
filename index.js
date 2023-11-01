const express=require('express');
const mongoose=require('mongoose');
const studentRoute=require('./controller/studentRoute');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();


mongoose.set("strictQuery",true);//To supress the deprection warning 
mongoose.connect("mongodb+srv://test:12345@cluster0.bfcft0v.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error Occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})

//line 4,5,16,17,18 are added to resolve the network error issue