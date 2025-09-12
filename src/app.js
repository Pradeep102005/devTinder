const express = require('express');
const connectDb=require("./config/database");
const app = express();
const User=require("./models/user");
app.use(express.json());
app.get("/user",async (req,res)=>{
    const userEmail=req.body.emailId;
    try{
  const users=await User.find({emailId:userEmail});
  if(users.length===0){
    res.status(400).send("User not found");
  } else{
    res.send(users);
  }
  
    }
    catch(err){
        res.status(400).send("something went wrong");
    }
  
})
app.post("/signup",async (req,res)=>{
   
    //creating a new instance of the user model
    const user=new User(req.body);
    // console.log(req.body);
    try{
    await user.save();
    res.send("User added sucessfully!");
    } catch(err){
        res.status(400).send("Error saving the user:"+err.message);
    }
});
//getuser by email
app.get("/userinfo",async (req,res)=>{
    const userEmail=req.body.emailId;
    try{
    const user=await User.find({emailId:userEmail})
    res.send(user);
    } catch(err){
        res.status(4000).send("Something went wrong");
    }
})

//Feed API-GET/fed-get all the users from the database
app.get("/feed",async (req,res)=>{
    try{
        const users=await User.find({})
        res.send(users);

    }

catch(err){
        res.status(400).send("Error saving the user:"+err.message);
    }
})
//delete a user from the database
app.delete("/user",async(req,res)=>{
    const userId=req.body.userId;
    try{

        const user=await User.findByIdAndDelete(userId)
        res.send("User deleted sucessfully")

    }
    catch(err){
        res.status(400).send("Error saving the user:"+err.message);
    }
})
//update data of the year
app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    

    try {
        const ALLOWED_UPDATES = ["userId","photoUrl", "about", "gender", "age", "skills"];
    
    const isUpdateAllowed = Object.keys(data).every((k) =>
        ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error ("Update not allowed");
    }
    if(data.skills&&data.skills>20){
        throw new Error("You can add a maximum of 20 skills.")
    }
        await User.findByIdAndUpdate(userId, data, {
            runValidators: true,
        });
        res.send("User updated successfully");
    } catch (err) {
        res.status(400).send("Error saving the user: " + err.message);
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
