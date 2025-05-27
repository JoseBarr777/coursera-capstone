import '@styles/BookingForm.css';
import '@styles/Button.css';

import { fetchAPI } from '@api/api';
import { formatDateForInput, parseDateFromInput } from '@utils/dateUtils';
import { useState, useEffect } from 'react';


const BookingForm = ({availableTimes, dispatch, submitForm}) => {

    // Add defensive default in case availableTimes is undefined
    const availableTimesList = Array.isArray(availableTimes) ? availableTimes : [];

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(availableTimesList.length > 0 ? availableTimesList[0] : '');
    const [guestCount, setGuestCount] = useState(1);
    const [occasion, setOccasion] = useState('Not selected');

    useEffect(() => {
        const fetchTimes = async () => {
            const times = await fetchAPI(date);
            dispatch({type: 'UPDATE_TIMES', times});
        };

        fetchTimes();
    },[date, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
          date: date instanceof Date ? date.toISOString().split('T')[0] : date,
          time,
          guestCount,
          occasion,
        };

        await submitForm(formData); // ✅ let parent handle API and navigation
      };

    const handleDateChange = (e) => {
        setDate(parseDateFromInput(e.target.value)); // convert string to Date
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor="res-date">Choose date</label>
                <input
                type="date"
                id="res-date"
                value={formatDateForInput(date)} // convert Date to string
                onChange={handleDateChange}
                />
                <label htmlFor="res-time">Choose time:</label>
                <select
                id="res-time"
                value={time}
                onChange={handleTimeChange}
                >
                    {availableTimesList.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                type="number"
                min="1" max="10"
                id="guests"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value="Not selected">Not selected</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>

                <button type="submit" className="btn-primary">Make Your Reservation</button>
            </form>
        </div>
    );
};

export default BookingForm;