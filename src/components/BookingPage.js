import { useReducer } from 'react';
import BookingForm from './BookingForm';
import '../CSS_properties/BookingPage.css';
import API from '../utils/ApiFunction';

export const initializeTimes = () => {
    return API.fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
    return API.fetchAPI(new Date(action.date));
};

const BookingPage = () => {
    const [
        availableTimes,
        dispatchTimes
    ] = useReducer(updateTimes, [], initializeTimes);

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