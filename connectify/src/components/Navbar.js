import { useref } from "react";

function Navbar() {
/*const navRef = useRef();

const showNavbar = () => {
   navRef.current.classList.toggle("responsive_nav");
  }*/
    return( 
        <headaer>
            <h3>Connectify</h3>
            <nav /*ref={navRef}*/>
                <a href="#">Accueil</a>
                <a href="#">Connexion</a>
                <a href="#">Inscription</a>
                <button className="nav-btn nav-close-btn" /* onClick={showNavbar}*/>
                
                </button>
            </nav>
            <button  className="nav-btn " /*onClick={showNavbar}*/>

            </button>

        </headaer>

    );
}

export default Navbar;