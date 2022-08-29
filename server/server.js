const express=require("express");
const mongoose=require("mongoose");

const app=express();

//creating server
app.listen(3001, (err)=>{
    if(!err){
        console.log("Server Created successfully at 3001 port");
    }else{
        console.log(err);
    }
})

//connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/realestate", (req, res)=>{
    console.log("Successfully Connected to Database");
})