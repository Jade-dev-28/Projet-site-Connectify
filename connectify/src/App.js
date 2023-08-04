import { BrowserRouter as Router, Switch, Route, Routes, Link} from 'react-router-dom';
//import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import Home from './routes/Home';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
