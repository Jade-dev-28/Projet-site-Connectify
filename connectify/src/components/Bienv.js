import React from 'react'
import './styles/bienv.css'


function Bienv(props) {
    return( 
        <div className='bienvenue'>
           <h2>{props.title}</h2>
           <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
        </div>
    );
}

export default Bienv;