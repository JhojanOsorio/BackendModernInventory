const { response, request} = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/users");

const usersGet = async (req= request, res = response) => {
  
  const query = {estado: true};
  const {limite = 0, desde = 0} = req.query;
  const usuarios  = await User.find(query)
  .skip(Number(desde))
  .limit(Number(limite));

  const total = await User.countDocuments();

  res.json({
    usuarios,
    total
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
    user1,
  });
};

const usersPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "Put Api - Controlador",
    id,
  });
};

const usersDelete = async(req, res = response) => {

  const {id} = req.params;

  const usuario = await  User.findByIdAndUpdate(id, {estado: false});
  
  res.json({
  usuario
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
