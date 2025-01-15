import React, { useState, useEffect } from 'react';

const ComptadorReversa = () => {
  // Inicialitzem l'estat per al comptador i per controlar si està actiu
  const [comptador, setComptador] = useState(10);
  const [actiu, setActiu] = useState(false);
  
  useEffect(() => {
    let interval;
    if (actiu && comptador > 0) {
      interval = setInterval(() => {
        setComptador((prevComptador) => prevComptador - 1);
      }, 1000);
    } else if (comptador === 0) {
      setActiu(false); // Aturem el comptador quan arriba a zero
    }
  
    return () => clearInterval(interval); // Netegem l'interval en desmuntar
  }, [actiu, comptador]);
  
return (
  <div>
    <h1>Compte enrere: {comptador}</h1>
    {comptador === 0 && <p>Temps acabat!</p>}
    <button onClick={() => setActiu(true)}>Iniciar</button>
    <button onClick={() => setActiu(false)}>Aturar</button>
  </div>
);}

export default ComptadorReversa;