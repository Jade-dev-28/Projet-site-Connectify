import React from 'react'
import fd_accueil from '../../media/fd_accueil.mp4';
import '../styles/header.css';

const Header = (props) => {
return (
<div className="header">
            <video id="bgvideo"  autoPlay loop>
            <source src={fd_accueil} type="video/mp4"/>
            </video>
            <div className='content'>
           <h1>{props.title}</h1>
            </div>
        </div>
  
);

}
export default Header;