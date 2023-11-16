const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SessoesModel = require("./SessoesModels");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    nome : {
        type: String,
        unique: true,
    },
    email : {
        type: String,
        unique: true,
    },
    departamento : String,
    cargo : String,
    senha : {
        type: String,
        select: false,
    },
});

UsuarioSchema.pre("save", async function (next){
    const user = this;

    if (user.isModified("senha")){
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.senha, salt);
    }
    next()
});

UsuarioSchema.pre("deleteOne",{document: true, query: false} , async function(){
    const usuario = this;
    return SessoesModel.deleteOne({ id_usuario: usuario._id});
})

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);

module.exports = UsuarioModel;