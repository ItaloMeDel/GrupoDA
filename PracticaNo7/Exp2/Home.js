import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Bienvenido a la Gestión de Usuarios</h1>
      <p>Haz clic en cualquier usuario para ver los detalles.</p>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
};

export default Home;
