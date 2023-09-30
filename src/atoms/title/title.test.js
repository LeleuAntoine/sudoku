import React from 'react';
import {render} from '@testing-library/react';
import Title from './Title';

test('renders title component', () => {
    const {getByText} = render(<Title text='Test Title' color={'2'} fontSize={2} fontWeight={2}/>);
    const titleElement = getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
});
