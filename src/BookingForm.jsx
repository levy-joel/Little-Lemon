import { useEffect, useState } from "react";
import AvailableTimeSlots from "./AvailableTimeSlots";
import './BookingForm.css'
import displayDate from "./displayDate";

const BookingForm = ({onSubmit, availableTimes, dispatch}) => {
    const formStartData = {
        booking_date: "",
        booking_time: "00:00",
        numberOfGuests: 2,
        booking_occasion: "none",
        customer_full_name: "",
        customer_email: "",
        customer_phone: "",
    };

    const [formData, setFormData] = useState(formStartData);
    useEffect (() => { dispatch({ date: formData.booking_date }); }, [dispatch, formData.booking_date]);

    const formChange = (e) => {
        const field = e.target.id;
        const value = e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        form_reset();
    }

    const form_reset = () => {
        setFormData(formStartData);
    }

    const isDisabled = !formData.booking_date | !formData.booking_time | !formData.customer_full_name | !formData.customer_email

        return (
        <form onSubmit={handleSubmit} className="form">
                <label htmlFor="booking_date">Date<sup>*</sup>: </label>
                <input
                    id="booking_date"
                    type="date"
                    value={formData.booking_date}
                    onChange={e =>formChange(e)}
                    min={displayDate(new Date())}
                    required
                />

                <label htmlFor="booking_time">Time<sup>*</sup>: </label>
                <select
                    id="booking_time"
                    value={formData.booking_time}
                    disabled={!formData.booking_date}
                    onChange={e => {formChange(e)}}
                    placeholder="Your full name"
                    required
                >
                    <AvailableTimeSlots availableTimes={availableTimes}/>
                </select>

                <label htmlFor="numberOfGuests">Number of Guests<sup>*</sup>: </label>
                <input
                    id="numberOfGuests"
                    type="number"
                    value={formData.numberOfGuests}
                    placeholder="For how many guests?"
                    min="1"
                    max="10"
                    onChange={e => formChange(e)}
                    required
                />

                <label htmlFor="booking_occasion">Occasion: </label>
                <select id="booking_occasion" value={formData.booking_occasion} onChange={e => formChange(e)}>
                    <option value="none">Nothing special</option>
                    <option value="birthday">It's my birthday</option>
                    <option value="anniversary">Cellebrating anniversary</option>
                    <option value="other">Other special occasion</option>
                </select>

                <label htmlFor="customer_full_name">Full Name<sup>*</sup>: </label>
                <input
                    id="customer_full_name"
                    type="text"
                    value={formData.customer_full_name}
                    onChange={e => formChange(e)}
                    placeholder="Your full name"
                    required
                />

                <label htmlFor="customer_email">Email<sup>*</sup>: </label>
                <input
                    id="customer_email"
                    type="email"
                    value={formData.customer_email}
                    onChange={e => formChange(e)}
                    placeholder="your@email.com"
                    required
                />

                <label htmlFor="customer_phone">Phone: </label>
                <input
                    id="customer_phone"
                    type="tel"
                    value={formData.customer_phone}
                    onChange={e => formChange(e)}
                />

            <div>
                <button
                    type="submit"
                    className="button"
                    disabled={isDisabled}>
                        <h5>Make Reservation</h5>
                </button>
            </div>
        </form>
    );
};

export default BookingForm;