const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesCrotroller");
const AuthController = require("./Controllers/AuthController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const AuthValidator = require("./Validators/AuthValidator");
const verificarJwt = require("./Middlewares/verificarJwt");
const verificarUsuario = require("./Middlewares/verificarUSuario");

const rotas = Router();

//Usuários
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", verificarJwt, UsuarioController.read);
rotas.delete("/usuarios/:id", verificarJwt, verificarUsuario, UsuarioValidator.destroy, UsuarioController.delete);
rotas.put("/usuario/:id", verificarJwt, verificarUsuario, UsuarioValidator.update, UsuarioController.update);

//Sessoes
rotas.post("/sessoes", verificarJwt, verificarUsuario, SessoesValidator.create, SessoesController.create);
rotas.get("/sessoes", verificarJwt, SessoesController.read);
rotas.delete("/sessoes/:id_usuario", verificarJwt, verificarUsuario, SessoesValidator.destroy, SessoesController.delete);

//AUTH
rotas.post("/login", AuthValidator.login, AuthController.login);

module.exports = rotas;