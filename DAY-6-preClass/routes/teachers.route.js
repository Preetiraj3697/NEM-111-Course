const {Router} = require("express");


const teachers = Router();

teachers.post("/create",(req,res)=>{
    res.send("Teacher create");
});
teachers.put("/update",(req,res)=>{
    res.send("update");
});

teachers.get("/get",(req,res)=>{
    res.send("Teacher get");
});

teachers.delete("/delete",(req,res)=>{
    res.send("delete");
});

module.exports = teachers;