import React from 'react';
import  "../style/header.css";
import Nicolas2 from '../imagenes/nicolas2.png'
import Brujas from '../components/Brujas'


const Header = () => {
    return ( 

        <header className="encabezado">
        
              <div className="container-header"> 
                  <div className= "container-logo-title">
                       <img src={Nicolas2} className="img-logo"/>
                      <h1>Hewtec</h1>
                    </div>
                    
                    <Brujas/>
                
                </div>
        </header>
        
        
     );
}
 
export default Header;