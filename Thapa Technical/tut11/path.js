/* 
TODO : PATH Module In Node.JS in Hindi in 2020 | Node JS Tutorial #11
? https://www.youtube.com/watch?v=xrj28wzHxKY&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=11
*/
// TODO :  to find the path, extn, etc of file we use path module
const path = require("path");
// console.log(path.dirname('C:/Users/yashy/OneDrive/Desktop/Node/Thapa Technical/tut11/path.js'));
// console.log(path.extname('C:/Users/yashy/OneDrive/Desktop/Node/Thapa Technical/tut11/path.js'));
// console.log(path.basename('C:/Users/yashy/OneDrive/Desktop/Node/Thapa Technical/tut11/path.js'));
// console.log(path.parse('C:/Users/yashy/OneDrive/Desktop/Node/Thapa Technical/tut11/path.js'));
const mypath=path.parse('C:/Users/yashy/OneDrive/Desktop/Node/Thapa Technical/tut11/path.js');
// console.log(mypath.name);
console.log(mypath.root);
