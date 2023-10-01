import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LeftPanel from './LeftPanel';

test('renders LeftPanel component', () => {
    const { getByText, getByLabelText } = render(<LeftPanel />);

    const labelElement = getByText(/Test Label/i);
    const addButton = getByText('+');

    expect(labelElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
});

test('adds item to the list when "+" button is clicked', () => {
    const { getByText, getByLabelText, getByRole } = render(<LeftPanel />);

    const addButton = getByText('+');

    fireEvent.click(addButton);

    const newItem = getByText(/\d+/); // Correspond à un chiffre entre 1 et 9
    expect(newItem).toBeInTheDocument();
});
