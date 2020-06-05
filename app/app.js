const express = require('express');
const bodyParser = require('body-parser');

const App = express()

App.use(bodyParser.json()); //Allow to send and recibe JSON format
App.use(bodyParser.urlencoded({extended: false})); 

module.exports = App