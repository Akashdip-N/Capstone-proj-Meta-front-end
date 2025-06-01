import { useReducer } from 'react';
import BookingForm from './BookingForm';
import '../CSS_properties/BookingPage.css';

const updateTimes = (state, action) => {
    const selectedDate = action.date;

    return [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];
};

const initializeTimes = () => {
    return [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];
};

const BookingPage = () => {
    const [availableTimes, dispatchTimes] = useReducer(updateTimes, null, initializeTimes);

    return (
        <div id="BookingPage" className="booking-page">
            <div className="Booking">
                <BookingForm
                    availableTimes={availableTimes}
                    dispatchTimes={dispatchTimes}
                />
            </div>
        </div>
    );
};

export default BookingPage;
