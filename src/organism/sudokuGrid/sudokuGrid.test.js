import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SudokuGrid from './SudokuGrid';

//TODO
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
}));

describe('SudokuGrid Component', () => {
    it('renders correctly', () => {
        const grid = [
            [0, 0, 0, 2, 6, 0, 7, 0, 1],
            [6, 8, 0, 0, 7, 0, 0, 9, 0],
            [1, 9, 0, 0, 0, 4, 5, 0, 0],
            [8, 2, 0, 1, 0, 0, 0, 4, 0],
            [0, 0, 4, 6, 0, 2, 9, 0, 0],
            [0, 5, 0, 0, 0, 3, 0, 2, 8],
            [0, 0, 9, 3, 0, 0, 0, 7, 4],
            [0, 4, 0, 0, 5, 0, 0, 3, 6],
            [7, 0, 3, 0, 1, 8, 0, 0, 0],
        ];

        const onCellClick = jest.fn();

        const { getByText, getByTestId } = render(
            <SudokuGrid grid={grid} onCellClick={onCellClick} />
        );

        expect(getByText('translation:error')).toBeInTheDocument();
        expect(getByTestId('grid-cell')).toBeInTheDocument();

        fireEvent.change(getByTestId('grid-cell'), { target: { value: '5' } });
    });
});
