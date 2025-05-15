import '@styles/App.css';

import {Routes, Route} from 'react-router';

import HomePage from '@pages/HomePage';
import BookingPage from '@pages/BookingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<HomePage/>}/>
      <Route path="/menu" element={<HomePage/>}/>
      <Route path="/reservations" element={<BookingPage/>} />
      <Route path="/order-online" element={<HomePage/>} />
      <Route path="/login" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
