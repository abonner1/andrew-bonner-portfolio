const express = require('express');
const hbs = require('hbs');

var app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.get('/', (request, response) => {
  response.render('home.hbs', {
    currentPage: 'Home'
  })
})

app.listen(3000)
