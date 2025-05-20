import '@styles/BookingForm.css';
import '@styles/Button.css';

import {useState} from 'react';

const BookingForm = () => {
const [date, setDate] = useState('2025-05-19');
const [time, setTime] = useState('17:00');
const [guestCount, setGuestCount] = useState(1);
const [occasion, setOccasion] = useState('Not selected');

const handleSubmit = (e) => {
    e.preventDefault(); //used to prevent defaul form submission behavior (reloads page and sends to some url)
    alert('Form has been submitted.');

    setDate('2025-05-19');
    setTime('17:00');
    setGuestCount(1);
}

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor="res-date">Choose date</label>
                <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
                <label htmlFor="res-time">Choose time:</label>
                <select
                id="res-time"
                value={time}
                onChange = {(e) => setTime(e.target.value)}
                >
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
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
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>

                <button type="submit" className="btn-primary">Make Your Reservation</button>
            </form>
        </div>
    );
};

export default BookingForm;