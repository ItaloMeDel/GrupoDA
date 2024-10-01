import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './Products.js';
import Cart from './Cart';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Productos</Link></li>
            <li><Link to="/cart">Carrito</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
          </ul>
        </nav>

        {/* Define las rutas */}
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
