const { response } = require("express");





const usersGet = (req, res = response) => {

const {q, nombre = "No name", apikey} = req.query;

  res.json({
    msg: "get Api - Controlador",
    q, 
    nombre,
    apikey
  });
};

const usersPost = (req, res = response) => {

const body = req.body;

  res.json({
    msg: "Post Api - Controlador",
    body
  });
};

const usersPut = (req, res = response) => {

const id = req.params.id;


  res.json({
    msg: "Put Api - Controlador",
    id
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
  usersPatch
};
