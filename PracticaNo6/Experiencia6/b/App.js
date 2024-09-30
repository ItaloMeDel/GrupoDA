import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Pagina Principal</h2>
      <nav>
        <Link to="profile">Perfil</Link> | 
        <Link to="settings">Ajustes</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h3>Pagina Perfil</h3>;
}

function Settings() {
  return <h3>Pagina Ajustes</h3>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
