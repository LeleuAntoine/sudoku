import React from 'react';
import {render} from '@testing-library/react';
import GamePage from './GamePage';

test('renders GamePage component', () => {
    const {getByText} = render(<GamePage/>);

    // Replace this assertion with your actual test logic
    const pageTitle = getByText('Welcome to the Sudoku Game');
    expect(pageTitle).toBeInTheDocument();
});
