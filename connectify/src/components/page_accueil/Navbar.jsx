import { useRef } from "react";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/navbar.css';


function Navbar(props) {
  const navRef = useRef();

  const showNabar = () => {
    navRef.current.classList.toggle("responsive_nav");

  }

  return (
    <header >
      <h3>Connectify</h3>


      <nav ref={navRef}>

        <a href={props.urlAcc}>{props.page}</a>
        <a href={props.urlCo}>{props.page2}</a>
        <a href={props.url2}>{props.page3}</a>
        <button className="nav-btn nav-close-btn" onClick={showNabar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn " onClick={showNabar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
