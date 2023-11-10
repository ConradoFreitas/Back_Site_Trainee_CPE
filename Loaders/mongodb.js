const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect("mongodb+srv://gustavomelo:EGVcOYSMlF8Igm0p@projetocpe.zr4xupr.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = startDB;