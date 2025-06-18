import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Registro from './registro/Registro';
import Inicio from './inicio/Inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<h1>Bienvenido al dashboard</h1>} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
