const express=require("express");
const port=require("./config/server.config");
const apiRouter = require("./routes");
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use('/api',apiRouter);

app.listen(port,()=>{
    console.log("server is lisitng on the port ",port);
})