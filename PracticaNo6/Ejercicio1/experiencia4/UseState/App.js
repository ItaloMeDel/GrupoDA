import React, { useState } from 'react';

function App() {
  // Definir el estado inicial usando useState
  const [count, setCount] = useState(0);

  return (
    <div class="App">
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default App;
