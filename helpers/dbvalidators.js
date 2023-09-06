const Role = require("../models/role");
const User = require ("../models/users")

const esRoleValidator = async (role = "") => {
  const existrole = await Role.findOne({ role });

  console.log(existrole);

  if (!existrole) {
    throw new Error(`El rol ${role} no esta registrado en la base de datos`);
  }
};

const UserForID = async (id = "") => {
  const existuser = await User.findById(id );

 

  if ( !existuser) {
    throw new Error(`El id no existe ${id} `);
  }
};

module.exports = {
  esRoleValidator,
 UserForID
};
