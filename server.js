const express = require('express');
const hbs = require('hbs');

var app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
  response.render('home.hbs', {
    currentPage: 'Home'
  })
})

app.get('/about', (request, response) => {
  response.render('bio.hbs', {})
})

app.get('/skills', (request, response) => {
  response.render('skills.hbs', {})
})

app.get('/projects', (request, response) => {
  response.render('projects.hbs')
})

app.get('/contact', (request, response) => {
  response.render('contact.hbs', {})
})

app.listen(3000)
