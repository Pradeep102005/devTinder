const express = require('express');
const app = express();
const { adminAuth, UserAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user/data", UserAuth, (req, res) => {
    res.send("Sending user data");
});

app.get("/user/login", (req, res) => {
    res.send("Login page opened user please login");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("all data sent");
});

app.listen(7777, () => {
    console.log("Server started running 7777");
});
