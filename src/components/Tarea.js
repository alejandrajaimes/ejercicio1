import React from 'react';
import  "../style/tarea.css";
import Header from '../components/Header'
import Boton from '../components/Boton'


const Tarea = () => {
    return ( 
        
       <div className="contenidogeneral1">
            <Header/>
            <Boton/>
        <div className="tarea">
            <p>Nombre de la Tarea</p>
            <p>Descripcion de la Tarea</p>
        </div>
       
       </div>
     );

}
 
export default Tarea;