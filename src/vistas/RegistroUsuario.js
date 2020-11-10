import React from 'react';
import  "../style/registrousuario.css";
import Header from '../components/Header'
import Boton from '../components/Boton'
import { Link } from 'react-router-dom';


const RegistroUsuario = () => {
    return ( 
        
        <div className="contenidogeneral2">
        <Header/>
        <Boton/>
    <div className="tarea2">
        <p>Nombre:</p>
        <input type="text" class="form-control input4" />
        <p>Apellidos:</p>
        <input type="text" class="form-control input4" />
        <p>Estudios:</p>
        <input type="text" class="form-control input4" />
        <p>Hobbits:</p>
        <input type="text" class="form-control input4" />
        <br/>
        <Link to="/Tarea"> <button type="button" className="boton3">VER MIS TAREAS</button></Link>
       
    </div>
   </div>
     );

}
 
export default RegistroUsuario;