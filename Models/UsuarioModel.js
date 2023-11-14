const mongoose = require("mongoose");

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
    senha : String,
})

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);

module.exports = UsuarioModel;