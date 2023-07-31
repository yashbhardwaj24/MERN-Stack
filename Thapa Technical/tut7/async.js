/* 
TODO : #7: Node.JS Asynchronous File System Core Modules | Reading and Writing File Asynchronously in Hindi
? https://www.youtube.com/watch?v=CgEZYq7A9xU&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=7

TODO : At Read Time we have to pass two arguments ok
first err and second is Data

*/

const fs= require("fs");

// fs.writeFile("read.txt","Hiii how are you", (err)=>{console.log("Executed");/*to check error */ console.log(err);});

// we pass them as an argument  - a callback - 
//that gets  called when that task completes.
//the call back  has an argument that tells you whether
//the operation completed  successfully
//Now we need to say what to do when fs.writeFile
//has completed (even if it's nothing), and start
// checking for errors.

// fs.appendFile("read.txt","Hii CSE",(err)=>{console.log("Executed"); console.log(err)});
// fs.unlink("asynce.txt",(err)=> {console.log("Executed");});

// fs.readFile("read.txt","utf8",(err,data)=> {console.log(data);});
