import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("authToken", "sampleToken"); // Simulación de autenticación
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <h2>Iniciar sesión</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
