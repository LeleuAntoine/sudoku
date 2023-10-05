import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Select from './Select';

test('renders Select component', () => {
    const handleChange = jest.fn();

    const options = [
        {value: 'fr', label: 'Français'},
        {value: 'en', label: 'Anglais'},
    ];

    render(
        <Select
            id="language-select"
            value="fr"
            onChange={handleChange}
            options={options}
            fontSize="16px"
        />
    );

    const selectElement = screen.getByTestId('language-select');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue('fr');

    fireEvent.change(selectElement, {target: {value: 'en'}});

    expect(handleChange).toHaveBeenCalledWith('en');
});
