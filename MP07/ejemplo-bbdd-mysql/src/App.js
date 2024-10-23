import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [estudiantes, setEstudiantes] = useState([]);

  // Hacer la solicitud al backend al montar el componente
  useEffect(() => {
    axios.get('http://localhost:5000/api/estudiantes')
      .then(response => {
        setEstudiantes(response.data);
      })
      .catch(error => {
        console.error('Hubo un error obteniendo los datos', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Lista de Estudiantes</h1>
      <ul>
        {estudiantes.map(estudiante => (
          <li key={estudiante.id}>
            {estudiante.nombre} - {estudiante.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
