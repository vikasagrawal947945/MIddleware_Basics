const express = require("express");
const app = express();
 
app.use((req,res,next)=>{
    let {token} = req.query; 
     if(token === "Access") next();
      else res.send("Access denied");
});
app.get("/" ,(req,res)=>{
   res.send("hiii");
});
  
   app.listen(3000, ()=>{
    console.log("server running on port 3000");
   })