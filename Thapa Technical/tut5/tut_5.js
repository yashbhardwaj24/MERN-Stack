const fs=require("fs");
const { exit } = require("process");
//cearting na new file
// fs.writeFileSync('read.txt',"wlcome to my home");



// fs.writeFileSync('read.txt',"wlcome to my home,,,, then yashh");

// fs.appendFileSync('read.txt',"how are you i am fine thakuu");


const buf_data=fs.readFileSync('read.txt');
// console.log(buf_data);

//Node.js includes an additional data type called bffer
//(not available in browser's javaScript).
//Buffer is mainly used to store binary data.
//while reading from a file or receiving packets over the network.

org_data = buf_data.toString();

// console.log(org_data);
fs.renameSync("read.txt","abc.txt");