const express=require('express');
//instance of expressjs application
const app=express();
app.use("/",(req,res)=>{
    res.send("Namaste from the dashboard..!");
})
app.use("/write",(req,res)=>{
    res.send("Writing mode activates");
})
app.use((req,res)=>{
    res.send("Hello from the server");
})


app.listen(3000,()=>{
    console.log("Sever is sucessfully listening on port 3000....");
});

