import React from "react";
import '../styles/main.css'; 
import Section from "./Section";
import sectionImg from '../../assets/fd_actualite.jpg';
import SectionQsn from "./SectionQsn";
import sectionImgQsn from '../../assets/fd_qsn.jpg';
import SectionContact from "./SectionContact";
import imgContact from "../../assets/fd_contact.jpg";


function Main (){
    return(
        <div>
            <Section 
            cName="section2"
            sectImg={sectionImg}
            title="Actualité"
            texte="Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres. 
            Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.
            Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble."/>
           
           <SectionQsn
            cName="section2"
            sectImg={sectionImgQsn}
            title="Qui sommes nous ?"
            texte="Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier. 
            Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques."/>
            
            <SectionContact
            cName="section2"
            sectImg={imgContact}
            title="Nous contacter"
            />

        </div>

    );

}
export default Main; 