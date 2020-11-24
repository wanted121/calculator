const express = require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    
    //res.send("hello world");
    res.sendFile(__dirname+"/index.html");
    //console.log(res.sendFile(__dirname));
});
app.post("/",function(req,res){
    console.log(req.body.num1);
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result of the calculation is "+result);
    
});

app.listen(3000,function(){
console.log("server start  at the server 3000");
});
