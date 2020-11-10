import React from 'react';
import  "../style/boton.css";
import Header from '../components/Header'
import Tarea from '../components/Tarea'
import { Link } from 'react-router-dom';

const Boton = () => {
    return ( 
        
       <div className="contenidogeneral1">
        
            
        <div className="boton">
        <Link to="/RegistroTarea"><button type="button" className=" botonEnviar1">+</button></Link>

            
        </div>
       </div>
     );

}
 
export default Boton;