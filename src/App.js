import React from 'react';
import Home from './vistas/Home'
import Header from './components/Header'
import Tarea from './components/Tarea'
import Boton from './components/Boton'
import RegistroUsuario from './vistas/RegistroUsuario'
import RegistroTarea from './vistas/RegistroTarea'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

   <Router>
      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/RegistroUsuario" component={RegistroUsuario}></Route>
          <Route path="/RegistroTarea" component={RegistroTarea}></Route>
          <Route path="/Tarea" component={Tarea}></Route>
        </Switch>
    
    </Router>

  );
}

export default App;
