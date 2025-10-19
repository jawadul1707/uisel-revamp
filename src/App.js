import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Training from './pages/Training';
import Apply from './pages/Apply';

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ensures every page starts from top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
}