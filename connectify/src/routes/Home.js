import "../App.css"
import Navbar from '../components/Navbar';
//import './components/styles/main.css';
import Header from '../components/Header';
import Bienv from '../components/Bienv';


function Home() {
  console.log("I AM NOT HERE")
    return (
      <div >
          
        <Navbar/>
        <Header title="Connectify"/>
        <Bienv title="Bienvenue"/>
        {/* <p>JE MANGE UNE POMME</p> */}
  
      </div>
  
    );
  }
  
  export default Home;
  