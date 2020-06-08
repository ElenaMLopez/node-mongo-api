const User = require("../models/User");

function index(req, res) {
  User.find({})
    .then((users) => {
      if (users.length) return res.status(200).send({ users });
      return res.status(204).send({ message: "No hay usuarios que mostrar" });
    })
    .catch((error) => res.status(500).send(error));
}

function show(req, res) {
  if (req.body.error) return res.status(500).send(error);
  if (req.body.user) return res.status(200).send(req.body.user);
  return res.status(404).send({ message: "El usuario no existe" });
}

function create(req, res) {
  new User(req.body)
    .save()
    .then((user) => res.status(201).send({ user }))
    .catch((error) => res.status(500).send(error));
}
function update(req, res) {
  if (!req.body.user)
    return res
      .status(204)
      .send({ message: "El usuario no existe y no puede actualizarse" });
  let user = req.body.user[0];
  user = Object.assign(user, req.body);
  user
    .save()
    .then((user) =>
      res.status(200).send({ message: "Usuario actualizado", user })
    )
    .catch((error) => res.status(500).send(error));
}

function remove(req, res) {
  if (req.body.error) return res.status(500).send(error);
  if (!req.body.user)
    return res
      .status(404)
      .send({ message: "No puede borrarse un usuario que no existe" });
  let user = req.body.user[0];
  user
    .remove()
    .then((user) => res.status(200).send({ message: "Usuario eliminado" }))
    .catch((error) =>
      res
        .status(500)
        .send({ message: "Error de servidor eliminando usuario", error })
    );
}

function find(req, res, next) {
  let query = {};
  query[req.params.key] = [req.params.value];
  User.find(query)
    .then((user) => {
      if (!user.length) return next();
      req.body.user = user;
      return next();
    })
    .catch((error) => {
      req.body.error;
      return next();
    });
}

module.exports = {
  index,
  show,
  create,
  update,
  remove,
  find,
};
