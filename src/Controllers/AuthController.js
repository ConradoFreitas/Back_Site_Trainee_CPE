const UsuarioModel = require("../Models/UsuarioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
    async login(req, res){
        try{
            const {email, senha} = req.body;
            
            const usuarioEncontrado = await UsuarioModel.findOne({email}).select("+senha");
            if (!usuarioEncontrado) return res.status(403);json({message:"E-mail ou senha inválidos"});
            
            const eCorrespondente = await bcrypt.compare(senha, usuarioEncontrado.senha);
            if(!eCorrespondente) return res.status(403).json({message:"E-mail ou senha inválidos"});

            const {senha: hashedSenha, ...usuario} = usuarioEncontrado.toObject();
            const token = jwt.sign(usuario, process.env.JWT_SECRET,{
                expiresIn:process.env.JWT_EXPIRE_IN}
            );

            res.status(200).json({token});
        } catch (error){
            res.status(500).json({message: "Erro na criação de usuário", error: error.message });
        }
    }
}

module.exports = new AuthController();