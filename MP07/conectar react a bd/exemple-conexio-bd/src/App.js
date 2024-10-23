import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const afegirUsuari = async () => {
    try {
      const resposta = await axios.post('http://localhost:3001/api/usuaris', { nom, email });
      console.log(resposta.data);
    } catch (error) {
      console.error('Error afegint usuari:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={afegirUsuari}>Afegir Usuari</button>
    </div>
  );
}

export default App;