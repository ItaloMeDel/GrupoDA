import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert("¡Gracias por hacer clic!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Hola, Aqui les muestro todo de nosotros!</h1>
        <p>Nuestra Aplicacion Actualizada.</p>
        <button className="btn-cambiar" onClick={handleClick}>Clic para Saludar</button>
      </header>
    </div>
  );
}

export default App;
