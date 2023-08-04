/* 
TODO :  Node.JS #12: How to CREATE and EXPORT Our Own Modules in Node JS in Hindi
? https://www.youtube.com/watch?v=GtV-_NTlnLg&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=12
*/
// const add = require('./opr');
// console.log(add(5,3));
// const opr = require('./opr');

// console.log(opr.add(8,9));
// console.log(opr.sub(8,9));
const {add, sub} = require('./opr');

console.log(add(8,9));
console.log(sub(8,9));
