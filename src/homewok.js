const express=require('express');
const app=express();
app.get('/user',(req,res,next)=>{
    res.send("ok");
},
(req,res)=>{
    res.send("i will do it");
})



// Start server
app.listen(7777, () => {
    console.log('Server running on http://localhost:7777');
});
