const fs = require('fs');
console.clear();

const folderName = "Moon";

if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log(`Folder ${folderName} Created`);
} else {
    console.log(`Folder Exits`);
}

const folderPath = `./${folderName}`;

let val1 = fs.readdirSync(folderPath);

console.log(val1);

fs.writeFile('./Moon/index.html', '<h1> Hello from FS </h1>', (err) => {
    if (err) throw err;

    console.log('File Created');
});
