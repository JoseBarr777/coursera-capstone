//the component for the table reservations page
import {useState} from 'react';

function BookingPage() {
  const [date, setDate] = useState('mm-dd-yyyy');  // Initialize with empty string for date input

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');

    //reset state fields
    setDate('mm-dd-yyyy');
  }

  return (
    //date, time, number of guests, occasion, submit reservation (drop down selection), submit reservation button.
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input 
        type="date" 
        name="date"
        value={date} 
        onChange={(e) => setDate(e.target.value)}  // Use e.target.value to get the new date
        />
      </label>
      <button type="submit">Confirm Reservation</button>
    </form>
    <h2>Date: {date}</h2>
    </>
  );
};

export default BookingPage;