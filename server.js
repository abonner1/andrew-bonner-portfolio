const express = require('express');

var app = express()

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.listen(3000)
