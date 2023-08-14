const express = require("express");
const res = require("express/lib/response");
const app = express();
const {chats} = require("./data/data");
const dotenv =require("dotenv")
dotenv.config()
app.get("/",(req,res)=>{
    res.send("api is running")
})
app.get("/api/chat",(req,res)=>{
    res.send(chats)
})
app.get("/api/chat/:id",(req,res)=>{
    
    const singlechat=chats.find(c=>c._id==req.params.id);
    // console.log("req",singlechat)
})
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server Started on port ${PORT}`))