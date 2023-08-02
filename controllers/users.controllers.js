const { response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/users");

const usersGet = (req, res = response) => {
  const { q, nombre = "No name", apikey } = req.query;

  res.json({
    msg: "get Api - Controlador",
    q,
    nombre,
    apikey,
  });
};

const usersPost = async (req, res = response) => {
  const { user, password, role } = req.body;
  const user1 = new User({ user, password, role });

  //verificar que el correo existe
  const existUser = await User.findOne({ user });
  if (existUser) {
    return res.status(400).json({
      msg: "Ese usuario ya esta registrado",
    });
  }

  //Encriptar contraseña
  const salt = bcryptjs.genSaltSync();
  user1.password = bcryptjs.hashSync(password, salt);

  //Guardar base de datos
  await user1.save();

  res.json({
    user1
  });
};

const usersPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "Put Api - Controlador",
    id,
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "Delete Api - Controlador",
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "Patch Api - Controlador",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  usersPatch,
};
