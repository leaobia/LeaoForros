import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './estilo/style.scss'
import './estilo/reset.scss'
import './estilo/fontes.scss'
import Home from './pages/Home';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} /> 
          </Routes>
      </Router>
  );
}

export default App;