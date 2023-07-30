import { useReducer } from "react";
import BookingForm from "./BookingForm";
import initializeTimes from "./initializeTimes";
import updateTimes from "./updateTimes";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./api";
import './BookingPage.css'

const BookingPage = () => {
  const [availableTimes , dispatch] = useReducer(updateTimes, {}, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate("/ConfirmedBooking");
  };

  return (
    <div className="booking-container">
      <h3>Book a Table</h3>
      <p>Please fill the details on the form and click the "Make Reservation" button.<br/>
        Field marked with * must be filled.
      </p>
      <BookingForm
        onSubmit={submitForm}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
};

export default BookingPage;