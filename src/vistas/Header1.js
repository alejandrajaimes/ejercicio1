import React from 'react';
import  "../style/header.css";
import Nicolas2 from '../imagenes/nicolas2.png'



const Header1 = () => {
    return ( 

        <header className="encabezado">
        
              <div className="container-header"> 
                  <div className= "container-logo-title">
                       <img src={Nicolas2} className="img-logo"/>
                      <h1>Hewtec</h1>
                    </div>
                    
                   
                
                </div>
        </header>
        
        
     );
}
 
export default Header1;