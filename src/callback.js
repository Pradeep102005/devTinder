const express=require('express');
const app=express();

app.get('/user/:userId/:name/:password',(req,res)=>{
    console.log(req.params);
    res.send({firstName:"Pradeep",lastName:"Palakodeti"});
});
app.listen(7777,()=>{
console.log("Server started running 7777");
})