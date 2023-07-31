/* 
TODO: NODE.JS #8: Synchronous vs Asynchronous Programming in NODE JS in Hindi
? https://www.youtube.com/watch?v=rDsR1SRQwxE&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=8
*/

const fs =require("fs");
const { clearScreenDown } = require("readline");
 
fs.readFile("read.txt","utf8",(err,data)=> {console.log(data);});
console.log("Helloooo CSE");

// IN Async it will give that one which is faster

// BUT in SYNCE it will give accordingly to the sequence