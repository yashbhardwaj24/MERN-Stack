/*  
TODO : Node.JS OS Module To Get Operating System Info in Hindi | Node JS Tutorial #10
? https://www.youtube.com/watch?v=tFKzxizRkfY&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=10
*/

const os =require("os");

// console.log(os.arch());

const osfreemem = os.freemem();
// console.log(osfreemem);
// console.log(`${osfreemem/1024/1024/1024}`);
const tmem = os.totalmem();
// console.log(tmem);
// console.log(`${tmem/1024/1024/1024}`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());


