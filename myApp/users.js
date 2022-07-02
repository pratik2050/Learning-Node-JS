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



app.get('/:id/:val', (req, res, next) => {
  res.send(req.params)
  next()},
  (req, res) => {
      console.log(`Second Callback ${req.params.val}`);
})

app.post('/users', (req, res) => {
  console.log(req.body);
  res.send(`Done: User ${req.body.user} ID: ${req.body.id}`)
})



app.get('/api', (req, res) => {
  res.json(myObj);
});


app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})

