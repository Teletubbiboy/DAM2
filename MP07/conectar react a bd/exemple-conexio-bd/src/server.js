const express = require('express');
const Usuari = require('./model');
const app = express();

app.use(express.json());

app.post('/api/usuaris', async (req, res) => {
  try {
    const nouUsuari = await Usuari.create(req.body);
    res.json(nouUsuari);
  } catch (error) {
    res.status(500).json({ error: 'Error afegint usuari' });
  }
});

app.listen(3001, () => {
  console.log('Servidor escoltant a http://localhost:3001');
});