import React from 'react';
import  "../style/header.css";
import Bruja from '../imagenes/bruja.png'
import { Link } from 'react-router-dom';


const Brujas = () => {
    return ( 
        <div className= "container-logo-title1">
            <Link to="/RegistroUsuario"> <img src={Bruja} className="img-bruja"/></Link>
       
        </div>
 
     );
}
 
export default Brujas;