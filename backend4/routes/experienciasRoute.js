// routes/experienciasRoute.js
const express = require('express');
const router = express.Router();

// ver experiencias
router.get('/', (req, res) => {
  res.send('Lista de experiencias');
});

 
// para crear una experiencia
router.post('/', (req, res) => {
  const newExperience = req.body.name;  
  res.send(`Nueva experiencia creada: ${newExperience.name}`);
});

// actualizar 
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedExperience = req.body;
  res.send(`Experiencia con ID ${id} actualizada: ${updatedExperience.name}`);
});

// eliminar
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Experiencia con ID ${id} eliminada`);
});

module.exports = router;