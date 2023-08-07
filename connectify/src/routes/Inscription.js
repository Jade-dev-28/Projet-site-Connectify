//import "../App.css"
//import "../components/styles/main.css";
import Navbar from '../components/page_accueil/Navbar';
import MainInscription from '../components/page_inscription/MainInscrption';
import Footer from "../components/Footer";

function Inscrption(){
return(

    <div>
        <Navbar
        page="Accueil"
        page2="Connexion"
        page3="Inscription"
        urlAcc="./Accueil"
        urlCo="./Connexion"
        url2= "./Inscription"/>
        <MainInscription/>
        <Footer/>
    </div>
);

}

export default Inscrption;