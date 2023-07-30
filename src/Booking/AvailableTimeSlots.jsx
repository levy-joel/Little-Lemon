const AvailableTimeSlots = ({ availableTimes }) => {
    const freeSlots = availableTimes.map(slot => <option key={slot}>{slot}</option>);
    return <>{freeSlots}</>
};

export default AvailableTimeSlots;