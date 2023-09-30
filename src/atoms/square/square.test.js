import React from 'react';
import {render} from '@testing-library/react';
import Square from './Square';

test('renders square component with value', () => {
    const {getByText} = render(<Square value="5" size={10} fontSize={1}/>);
    const squareElement = getByText(/5/i);
    expect(squareElement).toBeInTheDocument();
});
