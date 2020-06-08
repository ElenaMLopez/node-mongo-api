const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Product = require('./routes/product');
const User = require('./routes/user')

App.use(bodyParser.json()); //Allow to send and recibe JSON format
App.use(bodyParser.urlencoded({ extended: false }));

App.use('/product', Product); //This will be our root path "www.api.com/product"
App.use('/user', User);

module.exports = App;