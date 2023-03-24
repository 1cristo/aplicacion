import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Estudiante from './AlumnoInicio';
//import Docente from './Docente';
import Administrador from './administrador';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/estudiante" component={Estudiante} />
      {/* <Route path="/docente" component={Docente} /> */}
      <Route path="/administrador" component={Administrador} />
    </BrowserRouter>
  );
}

export default App;
