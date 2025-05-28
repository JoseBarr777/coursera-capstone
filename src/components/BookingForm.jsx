import '@styles/BookingForm.css';
import '@styles/Button.css';

import { fetchAPI } from '@api/api';
import { formatDateForInput, parseDateFromInput } from '@utils/dateUtils';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const BookingForm = ({availableTimes, dispatch, submitForm}) => {

    // Add defensive default in case availableTimes is undefined
    const availableTimesList = Array.isArray(availableTimes) ? availableTimes : [];

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(availableTimesList.length > 0 ? availableTimesList[0] : '');
    const [guestCount, setGuestCount] = useState(1);
    const [occasion, setOccasion] = useState('Not selected');
    const [formValid, setFormValid] = useState(false);

    const validateForm = ({date, time, guestCount, occasion}) => {
        return(
            date && time
            && (guestCount > 0)
            && (guestCount <= 10)
            && (occasion !== 'Not selected')
        );
    };

    useEffect(() => {
        setFormValid(validateForm({date, time, guestCount, occasion}));
    }, [date, time, guestCount, occasion])

    useEffect(() => {
        const fetchTimes = async () => {
            const times = await fetchAPI(date);
            dispatch({type: 'UPDATE_TIMES', times});
        };

        fetchTimes();
    },[date, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formValid) {
            toast.error("Form is invalid. Please check your inputs.");
            return;
        }
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
            <ToastContainer position="top-center"/>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor="res-date">Choose date</label>
                <input
                type="date"
                id="res-date"
                value={formatDateForInput(date)} // convert Date to string
                onChange={handleDateChange}
                required
                min={new Date().toISOString().split('T')[0]}
                />
                <label htmlFor="res-time">Choose time:</label>
                <select
                id="res-time"
                value={time}
                onChange={handleTimeChange}
                required
                >
                    {availableTimesList.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                className={!formValid && guestCount < 1 ? 'invalid' : ''}
                type="number"
                min="1" max="10"
                id="guests"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
                required
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                >
                    <option value="Not selected" disabled>Not selected</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                {occasion === 'Not selected' ? (
                <span className="error-text">Please select a valid occasion.</span>
                ) : null}


                <button type="submit" className="btn-primary" disabled={!formValid}>Make Your Reservation</button>
            </form>
        </div>
    );
};

export default BookingForm;