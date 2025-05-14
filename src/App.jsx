import './styles/App.css';
import { Routes, Route } from 'react-router';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default App;
