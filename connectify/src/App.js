import { BrowserRouter as Router, Switch, Route, Routes, Link} from 'react-router-dom';
//import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import Home from './routes/Home';
import Connexion from './routes/Connexion';
import Contact from './routes/Contact';
import Inscription from './routes/Inscription';
import Profil from './routes/Profil';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/accueil" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/profil" element={<Profil />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
