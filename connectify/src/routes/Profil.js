import React from "react";
import Navbar from "../components/page_accueil/Navbar";
import '../components/styles/navbar.css';
import Footer from "../components/Footer";
import Header from "../components/page_profil/Header";
import Main from "../components/page_profil/Main";



function Profil (){
return(
<div>
    <Navbar
    cName="bg_nav"
        page="Profil"
        page2="Contact"
        page3="Deconnexion"
        urlAcc="./Profil"
        urlCo="./Contact"/>
        
        <Header/>
        <Main/>

        <Footer/>
</div>

);

}

export default Profil; 