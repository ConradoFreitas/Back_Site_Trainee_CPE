const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);

module.exports = UsuarioModel;