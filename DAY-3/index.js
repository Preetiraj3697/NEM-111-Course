
// const checkEven = require("is-even");

// let result = checkEven(49);
// console.log(result);

const fs = require("fs");
// // console.log(fs);
// fs.readFile("./leacture.txt",{encoding:"utf-8"},(err,data)=>{
//  if(err) throw err;
//  else console.log(data);
// });
// let data;
// try{
//     data=fs.readFileSync("./leacture.txt",{encoding:'utf-8'})
// }catch(err){
//     console.log(err);
// }

fs.writeFile("./lecture.txt","This is my first project", (err)=>{
    if(err) throw err;
    console.log("File Created with DATA");
})
// try{
//     fs.writeFileSync("./lecture.txt","This is my second Project")
//     console.log("Data has been entered");
// }
// catch(err){
//     console.log(err);
// }

fs.appendFile("lecture.txt","\nThis is my third project\n",(err)=>{
    if(err) throw err;
    console.log("Append file")
})

