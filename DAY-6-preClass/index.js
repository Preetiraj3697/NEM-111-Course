const express = require('express');
const teachersRoutes = require("./routes/teachers.route");
const studentsRoutes = require("./routes/students.route");


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req,res,next)=>{
  if(!req.query.apiKey){
    return res.status(401).send("No API key provider");
  }
  next();
})
//Logger, calculate the time.
app.get("/",(req,res)=>{
    res.send("Hello Preeti");
})
// app.use("/teachers", teachersRoutes);
// app.use("/students", studentsRoutes);
app.listen(8080,()=>{
    console.log("Listen server port 8080")
})