const express = require('express');
const request = require('request');
const app = express();

var port = '3000';

app.use(express.json());

app.post('/', async (req, res) => {

  let data = req.body;
  console.log('data: ' + req.body.text)
  res.send('fuck u')
});


app.listen(port, () => {
  console.log('Application listening on port ' + port);
});
