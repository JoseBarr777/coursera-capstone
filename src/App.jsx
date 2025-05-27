import '@styles/App.css';

import {Routes, Route, useNavigate} from 'react-router';
import {useReducer} from 'react';

import HomePage from '@pages/HomePage';
import BookingPage from '@pages/BookingPage';
import ConfirmedBooking from '@components/ConfirmedBooking';

import { initializeTimes, updateTimes } from '@utils/bookingReducer';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const {submitAPI} = await import('@api/api');
    const success = await(submitAPI(formData));

    if (success) {
      navigate('/confirmed');
    }
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<HomePage/>}/>
      <Route path="/menu" element={<HomePage/>}/>
      <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
      <Route path="/order-online" element={<HomePage/>} />
      <Route path="/login" element={<HomePage/>} />
      <Route path="confirmed" element={<ConfirmedBooking/>} />
    </Routes>
  );
}

export default App;
