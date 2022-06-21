const fs = require('fs');
const http = require('http');

const dir = './Moon'; 
const mainFile = 'log.html';
const url = `${dir}/${mainFile}`;

http.createServer((req, res) => {
    fs.readFile(url, (err, html) => {
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        });

        res.write(html);
        res.end();
    })
    console.log("Server Running");
}).listen(3300);

 
const rs = fs.createReadStream(url);
rs.on('open', (e) => {
    console.log("File is open");

    let val = '<br> Opened';

    updateFile(val);
})

function updateFile(val) {
    fs.appendFile(url, val, (err) => {
        if (err) throw err;

        console.log("File updated");
    })
}