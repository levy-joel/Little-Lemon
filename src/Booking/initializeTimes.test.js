//import { fireEvent, render, screen } from '@testing-library/react';
import initializeTimes from '../Booking/initializeTimes';

describe('Testing the initializeTimes function', () => {
    test('Should be not empty', () => {
        const result = initializeTimes();
        expect(result.length).toBeGreaterThan(0);
    });
});
