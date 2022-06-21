const path = require('path');

const dir = './Moon';
const fileName = 'log.html';
const url = path.join('/', '.', dir, fileName);

console.log(path.dirname(url));
console.log(path.basename(url));
console.log(path.extname(url));

const info = path.resolve(fileName);
console.log(info);
