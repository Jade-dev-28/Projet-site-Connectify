import React, { useState } from 'react'; // Assurez-vous d'importer 'useState'
import '../styles/navbar.css';
import { Icon } from '@iconify/react';

function Navbar(props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la nav

  const toggleNav = () => {
    console.log('ToggleNav function called.');
    setIsNavOpen(!isNavOpen);
  };

  return( 
    <header className={`${props.cName} ${isNavOpen ? 'nav-open' : ''}`}>
      <h3>Connectify</h3>
      <Icon icon="charm:menu-hamburger" color="white" width="60" height="60" onClick={toggleNav} />
      <nav>
        
        <a href={props.urlAcc}>{props.page}</a>
        <a href={props.urlCo}>{props.page2}</a>
        <a href={props.url2}>{props.page3}</a>
      </nav>
    </header>
  );
}

export default Navbar;
