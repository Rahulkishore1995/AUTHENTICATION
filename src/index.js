const express = require("express");
const connect=require("./configs/db");

const userController=require("./controllers/user.controllers")
const postController=require("./controllers/post.controllers")
const{register,login}=require("./controllers/auth.controller")

const app=express();
app.use(express.json());

app.use("/users",userController);

app.post("/register",register)
app.post("/login",login)

app.use("/post",postController);

app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});