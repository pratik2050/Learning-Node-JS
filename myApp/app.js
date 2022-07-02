const express = require('express');
const path = require('path');
const bp = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

const fileName = 'index.html';
const url = path.join(__dirname, 'index.html');


app.use(bp.urlencoded({extended:true}))


//GET Method
app.get('/', (req,res) => {
    res.send("Hello Ji");
})
app.get('/users', (req,res) => { 
    res.sendFile(url);
})
app.get('/users/:id/:val', (req, res, next) => {
    res.send(req.params)
    next()},
    (req, res) => {
        console.log(`Second Callback ${req.params.val}`);
})



//POST Method
app.post('/users', (req, res) => {
    console.log(req.body);
    res.send(`Done: User ${req.body.user} ID: ${req.body.id}`)
})



//Delete Method
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log('deleted ' + id);
    res.send({status: 'deleted', id: id});
})



//PUT Method
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log('updated ' + id);
    res.send({status: 'updated', id: id});
})



app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})
