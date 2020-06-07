const Product = require("../modelos/Product");

/**
 * When client access to any route, here we define
 * the function to be done
 */

function index(req, res) {
  Product.find({})
    .then((products) => {      
      if (products.length) return res.status(200).send({ products });
      return res.status(404).send({ message: "No hay productos" });
    })
    .catch((error) => res.status(500).send({ message: "Error de servidor", error }));
}

function show(req, res) {
  if (req.body.error) return res.status(500).send(error);
  if (req.body.products) return res.status(200).send({ products });
  return res.status(400)
    .send({ message: "Not found" });
}

function create(req, res) {
  new Product(req.body)
    .save()
    .then((product) => res.status(201).send({ product }))
    .catch((error) => res.status(500).send({ error }));
}

function update(req, res) {
  if (!req.body.products) return res.status(404).send({ message: "No encontrado" });
  let product = req.body.products[0];
  product = Object.assign(product, req.body); // Create a new object with new data
  product
    .save()
    .then((product) =>
      res.status(200).send({ message: "Producto actualizado: ", product })
    )
    .catch((error) => res.status(500).send({ error }));
}

function remove(req, res) {
  if (req.body.error) return res.status(500).send(error);
  if (!req.body.products) return res.status(404).send({ message: "Producto no encontrado, no puede eliminarse" });
  req.products[0]
    .remove()
    .then((product) =>
      res.status(200).send({ message: "Producto eliminado", producto })
    )
    .catch((error) => res.status(500).send({ error }));
}

function find(req,res,next){
  let query = {};
  query[req.params.key] = req.params.value;
  Product.find(query).then(products => {
      if(!products.length) return next();
      req.body.products = products;
      return next();
  }).catch(error =>{
      req.body.error = error;
      next();
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  remove,
  find,
};
