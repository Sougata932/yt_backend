//require('dotenv').config()
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import express from 'express'

dotenv.config({
  path: "./env "
})

const app = express()


connectDB()
.then(()=>{
  //to check if any error in server

  app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
    
  })
})
.catch((err)=>{
  console.log("MONGODB connection failed ...", err);
  
})









/*
const app = express();


;(async ()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error: ", (error=>{
      console.log("Error: ", error);
      throw error;
      
    })
  } catch(error){
    console.log(error);
    throw err    
  }
})()
*/