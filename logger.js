 const express= require("express");
  const app = express();
 app.use((req,res,next)=>{
     console.log(req.method , req.hostname , req.path , req.time);
     next();
 });

 app.get("/" , (req,res)=>{
    res.send("hii");
 });


   app.listen(3000, ()=>{
    console.log("server running on port 3000");
   })