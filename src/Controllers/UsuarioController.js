const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController{
    async create(req, res){
        try {
            const usuario = await UsuarioModel.create(req.body);

            const { senha, ...novoUsuario} = usuario.toObject();
            return res.status(200).json(usuario);
        } catch (error){
            res.status(500).json({message: "Erro na criação de usuário", error: error.message });
        }
    }
    async read(req, res){
        try{
            const usuario = await UsuarioModel.find();

            return res.status(200).json(usuarios);
        } catch (error){
            res.status(500).json({message: "Erro na leitura de usuário", error: error.message });
        }
    }
    async update(req, res){
        try{
            const { id } = req.params
            const usuarioEncontrado = await UsuarioModel.findById(id);

            if(!usuarioEncontrado) return res.status(404).json({message:"Usuário não encontrado"});
            return res.status(200).json(usuario);
        } catch (error){
            res.status(500).json({message: "Erro no update de usuário", error: error.message });
        }
    }
    async delete(req, res){
        try{
            const { id } = req.params
            const usuarioEncontrado = await UsuarioModel.findById(id);

            if(!usuarioEncontrado) return res.status(404).json({message:"Usuário não encontrado"});

            await usuarioEncontrado.deleteOne();

            return res.status(200).json({"menssagem": "Usuário deletado com sucesso."});
        } catch (error){
            res.status(500).json({message: "Erro ao apagar usuário", error: error.message });
        }
    }
}

module.exports = new UsuarioController();