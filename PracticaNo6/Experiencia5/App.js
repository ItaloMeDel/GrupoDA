import React, { useState, useEffect } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = [
        { id: 1, nombre: "TOny Jimenez" },
        { id: 2, nombre: "Ítalo Medina" },
        { id: 3, nombre: "Sachet Sachetón" }
      ];
      setUsuarios(data);
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaUsuarios;
