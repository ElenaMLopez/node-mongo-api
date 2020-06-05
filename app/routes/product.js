const express = require('express');
const ProductCtrl = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/')               // api.com/product/
      .get('/:key/:value')    // api.com/product/Hogar
      .post('/:key/:value')   // api.com/product/
      .put('/:key/:value')    // api.com/product/name/SamsungGalaxy
      .delete('/:key/:value');// api.com/product/name/SamsunGalaxy
module.exports = Router