//import { useref } from "react";
import './styles/navbar.css'

function Navbar() {
/*const navRef = useRef();

const showNavbar = () => {
   navRef.current.classList.toggle("responsive_nav");
  }*/
    return( 
        <header>
            <h3>Connectify</h3>
            <nav>
                <a href="/">Accueil</a>
                <a href="/">Connexion</a>
                <a href="/">Inscription</a>
                 </nav>
         </header>

    );
}

export default Navbar;