import './styles/App.css';

import {Routes, Route} from 'react-router';

import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/book-reservation" element={<BookingPage/>} />
    </Routes>
  );
}

export default App;
