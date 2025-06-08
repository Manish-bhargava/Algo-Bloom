const express=require("express");
const port=require("./config/server.config");
const app=express();
app.listen(port,()=>{
    console.log("server is lisitng on the port ",port);
})