const dotenv=require("dotenv");
dotenv.config();
port=process.env.PORT;
module.exports=port;