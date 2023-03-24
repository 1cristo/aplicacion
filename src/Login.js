import React, { useState, useHistory } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = [
      {
        email: "admin@example.com",
        password: "admin123",
        role: "Administrador",
      },
      {
        email: "teacher@example.com",
        password: "teacher123",
        role: "Docente",
      },
      {
        email: "student@example.com",
        password: "student123",
        role: "Estudiante",
      },
    ];

    const matchedCredentials = credentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (matchedCredentials) {
      const { role } = matchedCredentials;
      alert(`Bienvenido ${role}`);
      history.push(`/${role.toLowerCase()}`);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <div className="form-group">
        <label>Correo electrónico:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Contraseña:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Iniciar sesión
      </button>
      <a>si no tienes cuenta crear <a href=''>nuevo usuario</a></a>
    </form>
  );
};

export default Login;
