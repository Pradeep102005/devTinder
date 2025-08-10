const express=require('express');
const app=express();

app.get('/about',(req,res)=>{
    res.send("This server is created by pradeep")
})
app.get('/hobby',(req,res)=>{
    res.send("My hobbies are travellig,playing");
})
app.get('/',(req,res)=>{
    res.send("Welcome to my server");
})
app.get(7777,()=>{
console.log("Server started running 7777");
})