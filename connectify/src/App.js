
import './App.css';
import Navbar from './components/Navbar';
//import './components/styles/main.css';
import Header from './components/Header';
import Bienv from './components/Bienv';


function App() {
  return (

    <div >
      <Navbar/>
      <Header title="Connectify"/>
      <Bienv
      title="Bienvenue"/>

    </div>

  );
}

export default App;
