import '../Booking/ConfirmedBooking.css'

const ConfirmedBooking = ({ data }) => {
    return (
        <div className="confirmed-booking-container" aria-label="The reservation was confirmed">
            <h3>Your booking has been confirmed</h3>
            <h4>We are excited to have you in our restaurant.</h4>
            <p>
                If there is a change in your plans please let us know.
            </p>
        </div>
    );
};

export default ConfirmedBooking;