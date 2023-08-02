const Role = require("../models/role");


const esRoleValidator = async (role = "") => {


    const existrole = await Role.findOne({ role });

    console.log(existrole);
  
    if (!existrole) {
      throw new Error(
        `El rol ${role} no esta registrado en la base de datos`
      );
    }
  }

  module.exports = {

    esRoleValidator
  }