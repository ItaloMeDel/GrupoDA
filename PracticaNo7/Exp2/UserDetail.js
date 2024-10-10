import React from 'react';
import { useParams } from 'react-router-dom';
import tonyImg from './ga/ingerto.jpg';
import r1Img from './ga/random1.png';
import r2Img from './ga/random2.png';

const users = {
  1: { name: 'Tony Jimenez', age: 20, bio: 'Estudiante de Ingenieria de Sistemas en tercer año.', img: tonyImg },
  2: { name: 'Pedro Polar', age: 28, bio: 'Especialista en UI/UX que ha diseñado interfaces para grandes empresas tecnológicas.', img: r1Img },
  3: { name: 'Marcos Lopez', age: 36, bio: 'Ingeniero en redes con un profundo conocimiento en administración de servidores.', img: r2Img },
};

function UserDetail() {
  const { id } = useParams();
  const user = users[id];

  if (!user) {
    return <h2>Usuario no encontrado</h2>;
  }

  return (
    <div style={styles.container}>
      <img src={user.img} alt={user.name} style={styles.image} />
      <h2>{user.name}</h2>
      <p>Edad: {user.age}</p>
      <p>{user.bio}</p>
    </div>
  );
}

const styles = {
  container: { border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '300px', margin: 'auto' },
  image: { width: '150px', borderRadius: '50%', marginBottom: '10px' },
};

export default UserDetail;
