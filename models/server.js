const express = require("express");
const app = express();
var cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.usersRoutePath = "/api/users";

    //Conectar a base de datos
    this.ConnectDb();
    //Middlewares
    this.middlewares();
    //Rutas de la aplicacion
    this.routes();
  }

  async ConnectDb() {
    await dbConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Parseo y lctura del body
    this.app.use(express.json());

    //DIRECTORIO PUBLICO
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersRoutePath, require("../routes/user.route"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log("Servidor corriendo en puerto", this.PORT);
    });
  }
}

module.exports = Server;
