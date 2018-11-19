const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.get('/*', function(req, res) {   
    res.sendFile(path.join(__dirname, '/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })