
// const path = require("path");
// console.log(path);   
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// },1000)
// console.log("C");

// const print1=()=>{
//     console.log("Hello");
// }
// const print2=()=>{
//     console.log("World");
// }
// print1();
// print2();
//----------------------------------------------------------------------------------------------------------------------------------------//
// const crypto = require("crypto");
// const crypto = crypto.randomInt(0, 100);
// console.log(n);
//----------------------------------------------------------------------------------------------------------------------------------------//
var arguments = process.argv
  
function add(a, b) {
  
    // To extract number from string
    return parseInt(a)+parseInt(b) 
}
  
// var sum = add(crypto.randomInt(0, 100), crypto.randomInt(0, 100))
//   var sum = add(arguments[2], arguments[3])
// console.log("Addition is ", sum)
function sub(a, b) {
  
    // To extract number from string
    return Math.abs(parseInt(a)-parseInt(b))
}
  
// var sub = sub(arguments[2], arguments[3])
// console.log(`Subtraction is `, sub);
function Multiple(a, b) {
    // To extract number from string
    return parseInt(a)*parseInt(b) 
}

// var Multiple = Multiple(arguments[2], arguments[3])
// console.log(`Multiple is `, Multiple)
function Divide(a, b) {
  
    // To extract number from string
    return Math.abs(parseInt(a)/parseInt(b)) 
}
  
// var Divide = Divide(arguments[2], arguments[3])
// console.log(`Divide is `, Divide);

module.exports = {add,sub,Multiple,Divide}