const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerexperience = require('./routes/experienciasRoute');

app.use(express.json());
app.use('/experiencias', routerexperience);

// Ruta de ejemplo raiz
app.get('/', (req, res) => {
  res.send('inicio');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
