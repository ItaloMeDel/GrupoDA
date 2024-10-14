// src/context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Crear un proveedor de contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('prendido'); // Estado inicial del tema

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'prendido' ? 'apago' : 'prendido'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar el contexto
export const useTheme = () => useContext(ThemeContext);
