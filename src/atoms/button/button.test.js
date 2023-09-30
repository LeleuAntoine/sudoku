import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Button from './Button';

test('renders button component', () => {
    const {getByText} = render(<Button label="Test Button" fontSize={2} size={2} onClick={() => {
    }}/>);
    const buttonElement = getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
});

test('calls onClick prop when button is clicked', () => {
    const onClickMock = jest.fn();
    const {getByText} = render(<Button label="Test Button" fontSize={2} size={2} onClick={onClickMock}/>);
    const buttonElement = getByText(/Test Button/i);

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
});
