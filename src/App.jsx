import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<h1>Bienvenido al dashboard</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
