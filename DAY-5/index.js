const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json()) //middleware
app.get('/', (req, res) => {
    res.send('Hello World');
  })
app.get("/data", (req,res)=>{
    res.send("Data will be sent");
})
app.post("/addData",(req,res)=>{
    console.log(req.body);
    res.send("Data has been recorded");
})
app.get("/alldata",(req,res)=>{
    const data = fs.readFileSync("./db.json",'utf-8');
    const parsed_data = JSON.parse(data);
     console.log(parsed_data);
     res.send("Data is in terminal")
})

app.get("/allstudents",(req,res)=>{
    const data = fs.readFileSync("./db.json",'utf-8');
    const parsed_data = JSON.parse(data);
    console.log(parsed_data.student);
     res.send("student data is in terminal")
})
app.post("/addstudent",(req,res)=>{
    const data = fs.readFileSync("./db.json",'utf-8');
    const parsed_data = JSON.parse(data);
    parsed_data.student.push(req.body);
    //write it in the file
    fs.writeFileSync("./db.json", JSON.stringify(parsed_data));
    console.log(parsed_data);
    res.send("Database updated")
})
app.post("/addteacher",(req,res)=>{
    const data = fs.readFileSync("./db.json",'utf-8');
    const parsed_data = JSON.parse(data);
    parsed_data.teacher.push(req.body);
    fs.writeFileSync('./db.json',JSON.stringify(parsed_data));
    res.send("Database teacher updated");
})
app.delete("/deletestudent",(req,res)=>{
    const data = fs.readFileSync("./db.json",'utf-8');
    const parsed_data = JSON.parse(data);
    parsed_data.student.filter("preeti")
})
app.listen(3500,()=>{
    console.log("Running at port 3500");
})