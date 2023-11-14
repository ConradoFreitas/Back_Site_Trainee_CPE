const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require ("./Controllers/SessoesCrotroller");
const UsuarioValidator = require("./Validators/UsuarioValidator");

const rotas = Router();

//Usuários
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", UsuarioController.read);
rotas.delete("/usuarios/:id", UsuarioValidator.destroy, UsuarioController.delete);
rotas.put("/usuario/:id", UsuarioValidator.update, UsuarioController.update);

//Sessoes
rotas.post("/sessoes", SessoesController.create);
rotas.get("/sessoes", SessoesController.read);
rotas.delete("/sessoes/:id", SessoesController.delete);


module.exports = rotas;