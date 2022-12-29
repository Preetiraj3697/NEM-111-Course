var arguments = process.argv
const {add,sub,Multiple,Divide}= require("./test");
var sum = add(arguments[2], arguments[3])
console.log("Addition is ", sum);
var minus = sub(arguments[2], arguments[3]) 
console.log(`Subtraction is `, minus);
var Mul = Multiple(arguments[2], arguments[3])
console.log(`Multiple is `, Mul);
var Div = Divide(arguments[2], arguments[3])
console.log(`Divide is `, Div);