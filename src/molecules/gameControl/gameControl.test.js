import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GameControl from './GameControl';

const mockSolveSudoku = jest.fn();
const mockOnReset = jest.fn();
const mockCancel = jest.fn();

//TODO
describe('GameControl', () => {
    it('devrait afficher les boutons avec les labels corrects', () => {
        const { getByText } = render(
            <GameControl onReset={mockOnReset} cancel={mockCancel} solveSudoku={mockSolveSudoku} />
        );

        expect(getByText('Reset')).toBeInTheDocument();
        expect(getByText('Solve Sudoku')).toBeInTheDocument();
        expect(getByText('Undo')).toBeInTheDocument();
    });

    it('devrait appeler la fonction onReset lorsque le bouton Reset est cliqué', () => {
        const { getByText } = render(
            <GameControl onReset={mockOnReset} cancel={mockCancel} solveSudoku={mockSolveSudoku} />
        );

        const resetButton = getByText((content, element) => {
            const normalizedText = element.textContent.replace(/\s+/g, ' ').trim();
            return normalizedText === 'Reset';
        });

        fireEvent.click(resetButton);

        expect(mockOnReset).toHaveBeenCalled();
    });

    it('devrait appeler la fonction solveSudoku lorsque le bouton Solve Sudoku est cliqué', () => {
        const { getByText } = render(
            <GameControl onReset={mockOnReset} cancel={mockCancel} solveSudoku={mockSolveSudoku} />
        );

        fireEvent.click(getByText('Solve Sudoku'));

        expect(mockSolveSudoku).toHaveBeenCalled();
    });

    it('devrait appeler la fonction cancel lorsque le bouton Undo est cliqué', () => {
        const { getByText } = render(
            <GameControl onReset={mockOnReset} cancel={mockCancel} solveSudoku={mockSolveSudoku} />
        );

        fireEvent.click(getByText('Undo'));

        expect(mockCancel).toHaveBeenCalled();
    });
});
