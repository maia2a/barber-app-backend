const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Middleware
app.use(cors());
app.use(express.json());

//Conexao com o mongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB conectado com sucesso");
  })
  .catch((err) => {
    console.log("Erro ao conectar ao MongoDB: ", err);
  });

//Rota basica de teste
app.get("/", (req, res) => {
  res.send("API da barbearia funcionando");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});