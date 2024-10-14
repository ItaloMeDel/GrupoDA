// src/components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'prendido' ? 'apagao' : 'prendido'} mode
      </button>
    </div>
  );
};

export default ThemeToggle;
