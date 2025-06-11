import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AIFundamentalsPage from './components/AIFundamentalsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/ai-fundamentals" element={<AIFundamentalsPage />} />
      </Routes>
    </Router>
  );
}

export default App; 