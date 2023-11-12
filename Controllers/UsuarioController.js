const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController{
    async create(req, res){
        const usuario = await UsuarioModel.create(req.body);

        return res.status(200).json(usuario);
    }
    async read(req, res){
        const usuario = await UsuarioModel.find();

        return res.status(200).json(usuarios);
    }
    update(req, res){
        
    }
    async delete(req, res){
        const { id } = req.params

        await UsuarioModel.findByIdAndDelete(id);

        return res.status(200).json({"menssagem": "Usuario deletado com sucesso."});
    }
}

module.exports = new UsuarioController();