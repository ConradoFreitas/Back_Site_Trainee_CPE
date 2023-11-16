const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    nome : String,
    email : String,
    departamento : String,
    cargo : String,
    senha : String,
})

const UsuarioModel = mongoose.model("usuarios", UsuarioShema);

module.exports = UsuarioModel;