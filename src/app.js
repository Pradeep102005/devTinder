const express = require('express');
const connectDb=require("./config/database");
const app = express();
const User=require("./models/user");
app.post("/signup",async (req,res)=>{
    //creating a new instance of the user model
    const user=new User({
        firstName:"sachin",
        lastName:"tendulkar",
        emailId:"st@gmail.com",
        password:"st@123",
        _id:"347192763458762468945686"
    });
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






