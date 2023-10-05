import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import GameControl from './GameControl';

test('renders GameControl component with buttons', () => {
    const mockReset = jest.fn();
    const mockAutoPosition = jest.fn();

    const {getByText} = render(
        <GameControl onReset={mockReset} onAutoPosition={mockAutoPosition}/>
    );

    const resetButton = getByText(/Réinitialisation/i);
    const autoPositionButton = getByText(/Positionnement auto/i);

    expect(resetButton).toBeInTheDocument();
    expect(autoPositionButton).toBeInTheDocument();
});

test('calls onReset and onAutoPosition when buttons are clicked', () => {
    const mockReset = jest.fn();
    const mockAutoPosition = jest.fn();

    const {getByText} = render(
        <GameControl onReset={mockReset} onAutoPosition={mockAutoPosition}/>
    );

    const resetButton = getByText(/Réinitialisation/i);
    const autoPositionButton = getByText(/Positionnement auto/i);

    fireEvent.click(resetButton);
    fireEvent.click(autoPositionButton);

    expect(mockReset).toHaveBeenCalledTimes(1);
    expect(mockAutoPosition).toHaveBeenCalledTimes(1);
});
