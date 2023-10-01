import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SudokuGrid from './SudokuGrid';

const sampleGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

test('renders SudokuGrid component', () => {
    const { getAllByTestId } = render(<SudokuGrid grid={sampleGrid} onCellClick={() => {}} />);
    const gridCells = getAllByTestId('grid-cell');

    expect(gridCells.length).toBe(81); // 9x9 grid
});

test('calls onCellClick when a cell is clicked', () => {
    const mockCellClick = jest.fn();
    const { getByTestId } = render(<SudokuGrid grid={sampleGrid} onCellClick={mockCellClick} />);
    const cell = getByTestId('grid-cell-0-2'); // Get a specific cell

    fireEvent.click(cell);

    expect(mockCellClick).toHaveBeenCalledWith(0, 2);
});
