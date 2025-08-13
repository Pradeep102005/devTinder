const express=require('express');
const app=express();
app.use("/user",(req,res,next)=>{
    //route handler 1
    console.log("Handline the route user!!");
    //   res.send("Route handler1");
      next();
},
(req,res)=>{
    //route handler 2
    console.log("Handling the route user 2!!")
    res.send("2nd response!!");
}
);



app.listen(7777,()=>{
console.log("Server started running 7777");
})