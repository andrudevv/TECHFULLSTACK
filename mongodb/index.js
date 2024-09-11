const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const  URI =
"mongodb+srv://ANDRU:tech12345@tech4.lpmhd.mongodb.net/?retryWrites=true&w=majority&appName=TECH4";
mongoose
  .connect( URI, {})
  .then(() => console.log("Conectado a la DB"))
  .catch((err) => console.error("Error al conectar a la DB:", err));
 

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});