const express = require('express');
const fs = require('fs');
const app = express();
const timeLogger=(req,res,next)=>{
   const startTime = new Date().getTime();
   next();
   const endTime = new Date().getTime();
   console.log(endTime-startTime);
}
const watchMan = (req,res,next)=>{
   if(req.url==='/data'){
    next();
   }else{
     res.send('Bye!!')
   }
}
app.use(watchMan);
app.get("/",(req,res)=>{
    res.send("WELCOME");
    console.log('WELCOME');
})
app.get("/about",(req,res)=>{
    res.send("About Page");
    console.log('About Page');
})
app.get("/contacts",(req,res)=>{
    res.send("Contacts Page");
    console.log('Contacts Page:');
})
app.use(timeLogger);

app.get("/data",(req,res)=>{
   const data = fs.readFileSync('./dummy.txt',"utf-8");
   res.send(data);
})

app.listen(3500,()=>{
    console.log("running at 3500");
})