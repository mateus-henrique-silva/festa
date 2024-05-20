import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rec from './src/pages/rec';
import HomePage from './src/pages/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/rec" element={<Rec />} />
          <Route path="/" element={<HomePage />} />

          {/* Adicione outras rotas aqui conforme necessário */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
