// src/App.jsx
import React, { useState } from 'react';
import UserList from './components/UserList/UserList';
import Button from './components/Button/Button';
import './App.css'; // Importa estilos generales si deseas

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
    const newUser = { name: `User ${users.length + 1}`, email: `user${users.length + 1}@example.com` };
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <Button label="Add User" onClick={handleAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
