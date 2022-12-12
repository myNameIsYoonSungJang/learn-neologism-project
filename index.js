const express = require('express');
const fs = require('fs');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
})


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/templates/index.html')
})

app.get('/introduce', function(req, res){
  res.sendfile(__dirname + '/templates/introduce.html')
})

app.get('/survey', function(req, res){
  res.sendfile(__dirname + '/templates/survey.html')
})

app.get('/dictionary', function(req, res){
  res.sendfile(__dirname + '/templates/dictionary.html')
})

app.get('/quiz', function(req, res){
  res.sendfile(__dirname + '/templates/quiz.html')
})
