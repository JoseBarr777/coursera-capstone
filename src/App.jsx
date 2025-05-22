import '@styles/App.css';

import {Routes, Route} from 'react-router';
import {useReducer} from 'react';

import HomePage from '@pages/HomePage';
import BookingPage from '@pages/BookingPage';

// Initialize times function
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer function
const updateTimes = (state, action) => {
  // For now, return the same times regardless of date
  return state;
};

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
