import React from 'react';
import {render} from '@testing-library/react';
import Text from './Text';

test('renders text component', () => {
    const {getByText} = render(<Text text="Test Text" color={'red'} fontSize={2} lineHeight={0.5}/>);
    const textElement = getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
});
