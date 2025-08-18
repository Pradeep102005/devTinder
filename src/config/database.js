const mongoose=require('mongoose');
const connectDb=async()=>{
mongoose.connect(
    "mongodb+srv://pradeep:1ddmKDTqjmvFrBK9@nodex.v3g24wv.mongodb.net/devTinder"
);
};
module.exports=connectDb;