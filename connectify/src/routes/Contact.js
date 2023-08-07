import "../components/styles/main.css";
import React from "react";
import Navbar from "../components/page_accueil/Navbar";
import SectionContact from "../components/page_accueil/SectionContact";
import Footer from "../components/Footer";
import imgContact from "../assets/fd_contact.jpg";

function Contact (){
    return( <div>
        <Navbar
        page="Profil"
        page2="Contact"
        page3="Deconnexion"
        urlAcc="./Profil"/>
        
        <SectionContact
            cName="section2"
            sectImg={imgContact}
            title="Nous contacter"
            />
          <Footer/>
    </div>


    );

}
export default Contact;