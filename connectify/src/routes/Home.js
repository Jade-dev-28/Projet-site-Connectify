import "../App.css"
import Navbar from '../components/page_accueil/Navbar';
//import './components/styles/main.css';
import Header from '../components/page_accueil/Header';
import Bienv from '../components/page_accueil/Bienv';
import Main from "../components/page_accueil/Main";
//import ChangeLanguageComponent from "../components/page_accueil/Bienv";
import Footer from "../components/Footer";



function Home() {
  console.log("I AM NOT HERE")
    return (
      <div >
          
        <Navbar/>
        <Header title="Connectify"/>
       {/*<ChangeLanguageComponent/>*/} 
        <Bienv title="Bienvenue"/>
        <Main/>
        <Footer/>
        
      </div>
  
    );
  }
  
  export default Home;
  