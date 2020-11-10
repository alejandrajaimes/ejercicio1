import React from 'react';
import  "../style/registrotarea.css";
import Header from '../components/Header'
import { Link } from 'react-router-dom';

const RegistroTarea = () => {
    return ( 
        
       <div className="contenidogeneral1">
            <Header/>
        <div className="tarea1">
            <p>Nombre de la Tarea</p>
            <input type="text" class="form-control input3" />
            <p>Descripcion de la Tarea</p>
            <input type="text" class="form-control input3" />
            <br/>
            <Link to="/Tarea">
                <button type="button" className="boton2">GUARDAR TAREA</button></Link>
            
        </div>
       </div>
     );

}
 
export default RegistroTarea;