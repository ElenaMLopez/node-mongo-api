const mongoose = require('mongoose');

/**
 * First we must to define the model schema to create a product
 */
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  } ,
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Niños', 'Hogar', 'Entretenimiento']
  },
  stock: {
    type: Number,
    default: 10
  },
  date: {
    type: Date,
    default: Date.now()
  }
})
/**
 * Now we create the model with the method mongoose.model()
 * that's recive 2 params, the name and the schema for this entity
 */
const Product = mongoose.model('Product', ProductSchema)