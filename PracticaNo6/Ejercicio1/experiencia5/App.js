import React, { useState, useEffect } from 'react';

function App() {
  // Estado para almacenar los datos del perfil del usuario
  const [perfil, setPerfil] = useState({ nombre: "", email: "" });
  const [cargando, setCargando] = useState(true);

  // Simular la carga de datos cuando el componente se monta
  useEffect(() => {
    console.log("Componente montado: cargando datos de usuario...");
    
    // Simular una llamada a una API con un retraso de 2 segundos
    setTimeout(() => {
      setPerfil({ nombre: "Juan Pérez", email: "juan.perez@example.com" });
      setCargando(false); // Cambiamos el estado de cargando a false
      console.log("Datos de usuario cargados.");
    }, 2000); // Espera 2 segundos

    // Opcional: función de limpieza si fuera necesario
    return () => {
      console.log("Componente desmontado.");
    };
  }, []); // Solo se ejecuta cuando el componente se monta

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Perfil del Usuario</h1>
      {cargando ? (
        <p>Cargando datos del usuario...</p>
      ) : (
        <div>
          <p><strong>Nombre:</strong> {perfil.nombre}</p>
          <p><strong>Email:</strong> {perfil.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
