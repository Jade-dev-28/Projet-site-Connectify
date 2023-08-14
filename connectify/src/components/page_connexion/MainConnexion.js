import "../styles/page_connexion/mainConnexion.css";
import React from "react";
import Section from "../page_accueil/Section";
import sectionImg from '../../assets/fd_connexion.jpg';
import Login from "../../routes/Auth/Login";




function MainConnexion() {
    return (
        <div className="main_co">

            <Section
                cName="section2"
                sectImg={sectionImg}
                title="Connexion"
                texte={<Login />}
            />



        </div>

    );

}

export default MainConnexion