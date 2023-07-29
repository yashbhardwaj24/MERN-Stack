/*
    TODO:  #5: Mastering the Node.js Core Modules | File System Node.js Module in Hindi in 2020
    ? https://www.youtube.com/watch?v=5uZDLL0zaWg&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=5
    * Learn about core modules
    ! buf_data -> org_data
*/

const fs=require("fs");
const { exit } = require("process");
//cearting na new file
// fs.writeFileSync('read.txt',"wlcome to my home");



// fs.writeFileSync('read.txt',"wlcome to my home,,,, then yashh");

// fs.appendFileSync('read.txt',"how are you i am fine thakuu");


const buf_data=fs.readFileSync('read.txt');
console.log(buf_data);

//Node.js includes an additional data type called bffer
//(not available in browser's javaScript).
//Buffer is mainly used to store binary data.
//while reading from a file or receiving packets over the network.

org_data = buf_data.toString();

console.log(org_data);