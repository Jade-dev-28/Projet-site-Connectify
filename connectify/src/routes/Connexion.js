import "../../src/App.css";
import Footer from "../components/Footer";
import Navbar from "../components/page_accueil/Navbar";
import MainConnexion from "../components/page_connexion/MainConnexion";



function Connexion (){
    return(
        <div>
            <Navbar/>
            <MainConnexion title="Connexion"
        />

            <Footer/>
        </div>

    );

}
export default Connexion;