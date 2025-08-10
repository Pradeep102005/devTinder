const express=require('express');
const app=express();
app.use('/user',(req,res)=>{
    res.send("hahahahaha");
});

app.get('/user',(req,res)=>{
    res.send({firstName:"Pradeep",lastName:"Palakodeti"});
});
app.post('/user',(req,res)=>{
//saving data to the DB
   res.send("Data successfully saved to the database");
});
app.delete('/user',(req,res)=>{
    res.send("User deleted");
});
app.listen(7777,()=>{
console.log("Server started running 7777");
})