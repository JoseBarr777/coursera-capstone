import '@styles/App.css';

import {Routes, Route} from 'react-router';
import {useReducer} from 'react';

import HomePage from '@pages/HomePage';
import BookingPage from '@pages/BookingPage';

import { initializeTimes, updateTimes } from '@utils/bookingReducer';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<HomePage/>}/>
      <Route path="/menu" element={<HomePage/>}/>
      <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>} />
      <Route path="/order-online" element={<HomePage/>} />
      <Route path="/login" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
