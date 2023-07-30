import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const defaultProps = {
  onSubmit: jest.fn(),
  availableTimes: ['12:00'],
  dispatch: jest.fn()
}

test('Make Your reservation button exists', () => {
  render(<BookingForm {...defaultProps}/>);
  const linkElement = screen.getByText("Make Reservation");
  expect(linkElement).toBeInTheDocument();
});