import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Si tienes algún archivo CSS global
import App from './App'; // Importa el componente principal App
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Monta el componente App en el elemento con id "root"
);

reportWebVitals();
