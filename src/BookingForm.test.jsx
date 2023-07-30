import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

const defaultProps = {
    onSubmit: jest.fn(),
    availableTimes: ['12:00','13:00'],
    dispatch: jest.fn()
}

const todayDate = new Date().toJSON().slice(0, 10);

describe('BookingForm component submit button disabled without date & time & fullName & email filled up', () => {
    test('1 - Only date is filled', () => {
        render(<BookingForm {...defaultProps}/>);

        const dateInput = screen.getByLabelText(/Date/);
        fireEvent.change(dateInput, {target: {value: {todayDate}}});

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(defaultProps.onSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute('disabled');
    });

    test('2 - Only date & time are filled', () => {
        render(<BookingForm {...defaultProps}/>);

        const dateInput = screen.getByLabelText(/Date/);
        fireEvent.change(dateInput, {target: {value: {todayDate}}});

        const timeInput = screen.getByLabelText(/Time/);
        fireEvent.change(timeInput, {target: {value: '12:00'}});

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(defaultProps.onSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute('disabled');
    });

    test('3 - Only date & time & fullName are filled', () => {
        render(<BookingForm {...defaultProps}/>);
        const dateInput = screen.getByLabelText(/Date/);
        fireEvent.change(dateInput, {target: {value: {todayDate}}});

        const timeInput = screen.getByLabelText(/Time/);
        fireEvent.change(timeInput, {target: {value: '12:00'}});

        const fullNameInput = screen.getByLabelText(/Full Name/);
        fireEvent.change(fullNameInput, {target: {value: 'John Doe'}});

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(defaultProps.onSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute('disabled');
    });

    test('4 - all fields needed are filled', async () => {
        render(<BookingForm {...defaultProps}/>);

        const dateInput = screen.getByLabelText(/Date/);
        fireEvent.change(dateInput, {target: {value: {todayDate}}});

        const timeInput = screen.getByLabelText(/Time/);
        fireEvent.change(timeInput, {target: {value: '13:00'}});

        const fullNameInput = screen.getByLabelText(/Full Name/);
        fireEvent.change(fullNameInput, {target: {value: 'John Doe'}});

        const emailInput = screen.getByLabelText(/Email/);
        fireEvent.change(emailInput, {target: {value: 'email@example.com'}});

        const submitButton = screen.getByRole('button');
        //console.log(submitButton);

        fireEvent.click(submitButton);

        // expect(submitButton.getAttribute('disabled')).toBe('');
        expect(defaultProps.onSubmit).toHaveBeenCalled();

    });
});
