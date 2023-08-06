import React from "react";
import '../styles/main.css'; 
import sectionImg from '../../assets/fd_inscription.jpg';
import SectionInscrption from "./SectionInscription";


function MainInscription (props){
    return(
        <div>
             <SectionInscrption
            cName="section2"
            sectImg={sectionImg}
            title="Inscription"
            />
           
        </div>

    );

}
export default MainInscription;