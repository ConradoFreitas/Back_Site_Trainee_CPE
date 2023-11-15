const dotenv = require("dotenv");
const app = require("./App");
const Loaders = require("./Loaders/index");

dotenv.config()
Loaders.start;

const PORT = process.env.PORT || 8000;

app.listen(8000, () => console.log("Servidor rodando!"))
