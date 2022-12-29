const fs = require("fs");

// fs.readFile("test.txt", (err,data) => {
//     console.log(data.toString());
// });

// fs.appendFile("newTest.txt", "Hello World", (err)=>{
//    if(err){
//     console.log(err);
//    }
// })

// fs.open("empty.txt","w",(err,file)=>{
//   if(err) throw err;
//   console.log("File Created")
// })

// fs.writeFile("empty.txt","Hello This is content overwrite ok...😀",(err,file)=>{
//     if(err) throw err;
//     console.log("File Created")
//   })

// fs.appendFile('empty.txt','\n This file is no longer empty',(err)=>{
//    if(err) throw err;
//    console.log('Content Appended');
// });

// fs.unlink("newTest.txt",(err)=>{
//   if(err) throw err;
//   console.log("File Deleted")
// })

fs.rename("empty.txt","notEmpty.txt",(err)=>{
   if(err) throw err;
   console.log("File Renamed")
})
