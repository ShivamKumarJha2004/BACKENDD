import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import SigupRoute from "./Route/signUp.route.js";

import cors from "cors";
const app=express();
app.use(cors()),
app.use(express.json());

dotenv.config();
const port=process.env.port;
const url=process.env.MONGODBURL;

// connect to mongodb
try
{
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
console.log("connected to db" );
} 
catch(error)
{
    console.log("Error",error);

}
//define routes
app.use("/",SigupRoute)


app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});
