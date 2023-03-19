const express=require("express");

const app = express()

app.use("/home",(req,res)=>{
    res.send("Welcome to the server 2")
})

app.listen(4500,()=>{
    console.log("Server is listening on port no 4500")
})