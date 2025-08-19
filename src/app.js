const express = require('express');
const connectDb=require("./config/database");
const app = express();
const User=require("./models/user");
app.use(express.json());
app.post("/signup",async (req,res)=>{
   
    //creating a new instance of the user model
    const user=new User(req.body);
    try{
    await user.save();
    res.send("User added sucessfully!");
    } catch(err){
        res.status(400).send("Error saving the user:"+err.message);
    }
});

connectDb()
.then(()=>{
console.log("Database connection estbalised");
app.listen(7777, () => {
    console.log("Server started running 7777");
});
})
.catch(err=>{
console.log("Database cannot be connected");
});






