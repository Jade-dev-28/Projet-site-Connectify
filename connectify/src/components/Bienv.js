import React from 'react'
import './styles/bienv.css'
import fd_accueil from '../media/fd_accueil.mp4'



function Bienv(props) {
/*const navRef = useRef();

const showNavbar = () => {
   navRef.current.classList.toggle("responsive_nav");
  }*/


    return( 
        <div className="header">
            <video src={fd_accueil} autoPlay loop/>
            <div className='content'>
           <h1>{props.title}</h1>
            </div>
        </div>

    );
}

export default Bienv;