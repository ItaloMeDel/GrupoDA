import React from 'react';

function App() {
  // Componente Header
  function Header(props) { // Aquí estamos usando props.title
    return <h1>{props.title}</h1>;
  }

  // Componente Content
  function Content(props) { // Aquí estamos usando props.text
    return <p>{props.text}</p>;
  }

  return (
    <div className="App">
      <Header title="Bienvenido a Mi Página" />
      <Content text="Este es el contenido principal de la página" />
    </div>
  );
}

export default App;
