import React from 'react';
import  "../style/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nicolas2 from '../imagenes/nicolas2.png'
import Bruja from '../imagenes/bruja.png'
import Header from '../vistas/Header1'
import { Link } from 'react-router-dom';




const Home = () => {
    return ( 
        
        <div className= "contenidogeneral">
             <Header/>
          <div className="centralHome">
               <div class="container">
                  <div class="row justify-content-start">
                       <div class="col-4 logo-tex">
                           <img src={Nicolas2} className="img-logo2"/>
                            <h1 className="texto1">Hewtec</h1>
                       </div>
                   </div>
  
                    <div class="row justify-content-between">
                        <div class="col-6 textos-generales">
                            <h1 className="texto2">Bienvenidos</h1>
                            <h3 className="texto3">Soy Alejandra</h3> 
                            <Link to="/Tarea">
                                <button type="button" className="boton1">START</button>
                            </Link>
                            

                         </div>
                        <div class="col-4 brujahome">
                            <img src={Bruja} className="img-logo3"/>
                         </div>
                     </div>
  
                </div>
           </div>
        </div>
        
 
     );
}
 
export default Home;