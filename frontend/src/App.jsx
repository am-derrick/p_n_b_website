import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
