import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  
import ViewCV from './pages/ViewCV'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewCV" element={<ViewCV />} />
      </Routes>
    </Router>
  );
}

export default App;
