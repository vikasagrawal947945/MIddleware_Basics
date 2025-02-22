 const express = require("express");
  const app = express();

//creating 1st middleware
 app.use((req,res, next) =>{
     console.log("hii i am middle ware");
      next();
 });   // yahi bs excute hogi kyoki iske baad  iss middleware ko pata hi ni hai ky krna hai

 app.use((req,res,next)=>
 {
 console.log("hello i m 2nd middleware");
 next();
 });

 app.get("/",(req,res)=>{
    res.send("hi");
 });

 app.listen(3000 , ()=>{
    console.log("server is running on the port");
 })
