/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         h Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      // Aquí puedes agregar la lógica para redireccionar al usuario
      // a la página correspondiente basada en su rol
      alert(`Bienvenido ${matchedCredentials.role}`);
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
    </form>
  );
};

export default Login;
