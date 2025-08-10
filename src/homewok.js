const express=require('express');
const app=express();
app.get('/mobile',(req,res)=>{
    res.send("You are on mobiles server");
});
app.get('/laptop',(req,res)=>{
    res.send("You are in laptops server");
});
app.get('/',(req,res)=>{
    res.send("Which server you want? Mobile or laptop!");
})



app.listen(3333,()=>{
    console.log("Server started 123 ");
})