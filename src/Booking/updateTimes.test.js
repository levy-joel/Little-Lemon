//import { fireEvent, render, screen } from '@testing-library/react';
import updateTimes from './updateTimes';

describe('Testing the updateTimes function', () => {
    test('Should be not empty', () => {
        const state = updateTimes([], { date: '2023-12-01' });
        expect(state.length).toBeGreaterThan(0);
    });
});
