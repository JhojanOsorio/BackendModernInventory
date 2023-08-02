const { Router } = require("express");

const { validation } = require("../middlewares/validation");
const {esRoleValidator} = require("../helpers/dbvalidators")

const {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  usersPatch,
} = require("../controllers/users.controllers");
const { check } = require("express-validator");


const router = Router();

router.get("/", usersGet);

router.post(
  "/",
  [
    check("user", "El usuario no es valido").isEmail(),
    check("password", "La contraseña debe tener mas de 6 letras").isLength({
      min: 6,
    }),
    // check("role", "No es un rol valido").isIn(['ADMIN_ROLE', 'USER_ROLE'])
    check("role").custom(esRoleValidator),
  ],
  validation,
  usersPost
);

router.put("/:id", usersPut);

router.delete("/", usersDelete);

router.patch("/", usersPatch);

module.exports = router;
