import { useState } from 'react';
import '../CSS_properties/BookingForm.css';
import API from '../utils/ApiFunction';

function BookingForm({ availableTimes, dispatchTimes }) {
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [date_input, setDate] = useState(getTodayDate());
    const [time_input, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [reservationDetails, setReservationDetails] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChangeTime = (event) => {
        setTime(event.target.value);
    };

    const handleChangeOccasion = (event) => {
        setOccasion(event.target.value);
    };

    const handleChangeDate = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatchTimes({ date: newDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date: date_input,
            time: time_input,
            guests: guests,
            occasion: occasion,
        };

        const success = API.submitAPI(formData);

        if (success) {
            setReservationDetails(formData);
            setIsSubmitted(true); // hide the form
        } else {
            alert('Reservation failed!');
        }
    };

    return (
        <div style={{ display: 'grid', gap: '-10px' }}>
            <h1>{isSubmitted ? "Reservation successful" : "Reservations"}</h1>
            <h2>{isSubmitted ? "" : "Book your reservation below"}</h2>
            {!isSubmitted && (
                <form
                    className="booking-form"
                    style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date_input}
                        onChange={handleChangeDate}
                    />

                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time" value={time_input}
                        onChange={handleChangeTime}
                    >{
                            availableTimes.map(
                                (time, index) => (
                                    <option
                                        key={index}
                                        value={time}>{time}
                                    </option>
                                ))}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <p
                        style={{
                            fontSize: '0.8em',
                            color: '#666',
                            marginTop: '-15px',
                            marginBottom: '5px',
                        }}
                    >
                        (Between 1 and 10)
                    </p>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                    />

                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={handleChangeOccasion}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>

                    <button
                        type="submit"
                        disabled={guests < 1 || guests > 10}
                    >
                        Make Your reservation
                    </button>
                </form>
            )}

            {
                reservationDetails && (
                    <div style={{
                        border: '2px solid #4CAF50',
                        borderRadius: '10px',
                        marginTop: '-30px',
                        padding: '20px',
                        maxWidth: '200px',
                        backgroundColor: '#f9f9f9'
                    }}
                    >
                        <h3>Reservation Complete</h3>
                        <p><strong>Date:</strong> {reservationDetails.date}</p>
                        <p><strong>Time:</strong> {reservationDetails.time}</p>
                        <p><strong>Guests:</strong> {reservationDetails.guests}</p>
                        <p><strong>Occasion:</strong> {reservationDetails.occasion}</p>
                </div>
            )}
        </div>
    );
}

export default BookingForm;
