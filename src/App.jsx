import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Registro from './registro/Registro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<h1>Bienvenido al dashboard</h1>} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
