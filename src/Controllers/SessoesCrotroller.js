const SessoesModel = require("../Models/SessoesModels");

class SessoesController{
    async create(req, res){
        try {
            const sessoes = await SessoesModel.create(req.body);

            return res.status(200).json(sessoes);
        } catch (error){
            res.status(500).json({message: "Erro na criação de sessão", error: error.message });
        }
    }
    async read(req, res){
        try {
            const sessoes = await SessoesModel.find().populate('id_usuario', '-senha');

            return res.status(200).json(sessoes);
        } catch (error){
            res.status(500).json({message: "Erro na leitura de sessão", error: error.message });
        }
    }
    /*
    async update(req, res){
        const { id } = req.params
        const sessoes = await SessoesModel.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).json(sessoes);
    }
    */
    async delete(req, res){
        try {
            const { id } = req.params
            const sessaoEncontrada = await SessoesModel.findById(id);

            if(!sessaoEncontrada) return res.status(404).json({message:"Sessão não encontrada"});

            await sessaoEncontrada.deleteOne();

            return res.status(200).json({"menssagem": "Sessão deletada com sucesso."});
        } catch (error){
            res.status(500).json({message: "Erro ao apagar sessão", error: error.message });
        }
    }
}

module.exports = new SessoesController();