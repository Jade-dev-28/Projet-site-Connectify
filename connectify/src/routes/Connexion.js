import "../../src/App.css";
import Footer from "../components/Footer";
import Navbar from "../components/page_accueil/Navbar";
import MainConnexion from "../components/page_connexion/MainConnexion";



function Connexion (){
    return(
        <div>
            <Navbar
            page="Accueil"
            page2="Connexion"
            page3="Inscription"
            urlAcc="./Accueil"
             urlCo="./Connexion"
             url2= "./Inscription"/>
            <MainConnexion title="Connexion"/>
            <Footer/>
        </div>

    );

}
export default Connexion;