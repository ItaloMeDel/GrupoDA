import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>React Context Ejeplo</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
