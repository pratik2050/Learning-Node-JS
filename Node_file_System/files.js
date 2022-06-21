const fs = require('fs');

const dir = './Moon';

let counter = 1;
let newFile = `new ${counter}.html`;

fs.readdir(dir, (err, files) => {
    console.log(files);
    console.log(err); 

    counter = files.length + 1;

    newFile = `new ${counter}.html`;

    createFile(newFile);
}) 



function remaneFile(oldName, newName) {
    fs.rename(oldName, newName, (err) => {
        if (err) throw err;

        console.log("file renamed");
    })
}



//myLog('test1');

function delFile(val) {         //val should be the full path of file
    fs.unlink(val, (err) => {
        if (err) throw err;

        console.log('file deleted');
    })
}



function overRideLog(val) {     //override file / create
    const html = ` - ${val}`;
    fs.writeFile(dir + '/log.html', html, (err) => {
        if (err) throw err;

        console.log(`Updated WriteFile ${val}`);
    })
}

function myLog(val) {           //adding file / create
    const html = `<br> * ${val}`;

    fs.writeFile(dir + '/log.html', html, (err) => {
        if (err) throw err;

        console.log(`Appended ${val}`);
    })
}

function createFile(fileName) {
     const html = `<h1> Hello ${counter} </h1>`;

     fs.appendFile(dir + `/${fileName}`, html, (err) => {
        if (err) throw err;

        console.log(`Save File ${fileName}`);
     })
} 

