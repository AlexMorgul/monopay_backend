const express = require('express');
const request = require('request');
const app = express();

var port = '3000';

app.post('/', async (req, res) => {

  console.log('Метод отрабатывает. Body:\n' + req.body);
  return res.status(200).send('Все кайф!');
  
  
  if (!req.body) return res.sendStatus(400);

  let data = req.body;

  if (data.isExtend != null) {

  } else {
    await request.post('https://api.monobank.ua/api/merchant/invoice/create',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Token': 'ujaMDwOnUtpOK-ViXhqBCczdbua3pAkawIch6tgheZ4U'
        },
        body: JSON.stringify(data)
      },
      (error, response, body) => {
        console.log(body);
      }
    );
  }
});


app.listen(port, () => {
  console.log('Application listening on port ' + port);
});
