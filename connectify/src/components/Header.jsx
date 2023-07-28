import React from 'react'
import fd_accueil from '../media/fd_accueil.mp4'
import Navbar from './Navbar'

const Header = () => {
return (
    <div className="header">
        <Navbar/>
        <video src={fd_accueil} autoPlay loop/>
        <div className='content'>
        <h1>Connectify</h1>
        </div>
    </div>
)

}
export default Header