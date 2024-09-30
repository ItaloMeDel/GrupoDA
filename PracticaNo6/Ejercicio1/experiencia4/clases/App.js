import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Definir el estado inicial
    this.state = {
      count: 0
    };
  }

  // Método para manejar el cambio de estado
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 }); //Incrementa el contador
  };

  render() {
    return (
      <div class="App">
        <h1>Contador: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Incrementar</button>
      </div>
    );
  }
}

export default App;
