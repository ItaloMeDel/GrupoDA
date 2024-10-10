import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import UserDetail from './UserDetail';

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.navbar}>
          <Link style={styles.link} to="/">Inicio</Link>
          <Link style={styles.link} to="/user/1">Tony Jimenez</Link>
          <Link style={styles.link} to="/user/2">Pedro Polar</Link>
          <Link style={styles.link} to="/user/3">Marcos Lopez</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: { padding: '20px', fontFamily: 'Verdana, serif' }, 
  navbar: { display: 'flex', gap: '15px', marginBottom: '20px' },
  link: { textDecoration: 'none', color: 'green', fontSize: '18px' },
};


export default App;
