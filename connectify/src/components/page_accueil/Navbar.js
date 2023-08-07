//import { useref } from "react";
import '../styles/navbar.css';
import Home from '../../routes/Home';

function Navbar(props) {
/*const navRef = useRef();

const showNavbar = () => {
   navRef.current.classList.toggle("responsive_nav");
  }*/
    return( 
        <header className={props.cName}>
            <h3>Connectify</h3>
            <nav >
                
                <a href={props.urlAcc}>{props.page}</a>
                <a href={props.urlCo}>{props.page2}</a>
                <a href={props.url2}>{props.page3}</a>
                 </nav>
         </header>

    );
}

export default Navbar;