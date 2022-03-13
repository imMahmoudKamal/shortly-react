import './scss/main.scss'; // global styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Not Found */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
