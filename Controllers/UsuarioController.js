const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController{
    async create(req, res){
        const usuario = await UsuarioModel.create(req.body);

        return res.status(200).json(usuario);
    }
    read(req, res){
        
    }
    update(req, res){
        
    }
    delete(req, res){
        
    }
}

module.exports = new UsuarioController();