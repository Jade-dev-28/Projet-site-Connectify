import "../App.css"
import Navbar from '../components/page_accueil/Navbar';
//import './components/styles/main.css';
import Header from '../components/page_accueil/Header';
import Bienv from '../components/page_accueil/Bienv';
import Main from "../components/page_accueil/Main";



function Home() {
  console.log("I AM NOT HERE")
    return (
      <div >
          
        <Navbar/>
        <Header title="Connectify"/>
        <Bienv title="Bienvenue"/>
        <Main/>
        {/* <p>JE MANGE UNE POMME</p> */}
  
      </div>
  
    );
  }
  
  export default Home;
  