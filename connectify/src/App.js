import { BrowserRouter as Router, Switch, Route, Routes, Link} from 'react-router-dom';
//import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import Home from './routes/Home';
import Connexion from './routes/Connexion';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/accueil" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
