const express = require("express");
const app = express();
var i =0;


app.get("*",(req,res)=>{
    i+=1;
    res.send("Hello "+i);
});


app.listen(3000);