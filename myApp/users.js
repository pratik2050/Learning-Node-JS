const express = require("express");
const path = require("path");
const bp = require('body-parser'); 

const app = express();
const port = process.env.port || 8080;
const url = path.join(__dirname, 'users.html');

const myObj = require('./user_module');

app.use(bp.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.sendFile(url);
});

app.get('/api', (req, res) => {
  res.json(myObj);
});




console.log(myObj.users.some((ele) => ele.id == 1));

app.get('/:id', (req, res) => {
  console.log(req.params);

  let myJson = {};
  if (myObj.users.some((ele) => ele.id == req.params.id)) {
    myJson = myObj.users.filter((ele) => ele.id == req.params.id);
  }

  res.json(myJson);
})

app.get('/:id/:val', (req, res, next) => {
  res.send(req.params)
  next()},                  //getting parameters from form
  (req, res) => {
      console.log(`Second Callback ${req.params.val}`);
})

app.post('/users', (req, res) => {      //submit button post
  console.log(req.body);
  res.send(`Done: User ${req.body.user} ID: ${req.body.id}`)
})



app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})

