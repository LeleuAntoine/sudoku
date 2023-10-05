import React from 'react';
import {render} from '@testing-library/react';
import Label from './Label';

test('renders label component with text', () => {
    const {getByText} = render(<Label text="Test Label" fontSize={1.5} color="#333"/>);
    const labelElement = getByText(/Test Label/i);

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle('--label-font-size: 1.5rem');
    expect(labelElement).toHaveStyle('--label-color: #333');
});
