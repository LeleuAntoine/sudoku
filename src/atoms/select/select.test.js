import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from './Select';

const options = [
    { value: 'fr', label: 'French' },
    { value: 'en', label: 'English' },
];

//TODO
describe('Select component', () => {
    it('renders without errors', () => {
        const { getByTestId } = render(
            <Select
                id="language-select"
                value="fr"
                onChange={() => {}}
                options={options}
                fontSize="16px"
            />
        );

        expect(getByTestId('select-component')).toBeTruthy();
    });

    it('displays options correctly', () => {
        const { getByTestId } = render(
            <Select
                id="language-select"
                value="fr"
                onChange={() => {}}
                options={options}
                fontSize="16px"
            />
        );

        const selectElement = getByTestId('select-component');
        expect(selectElement).toHaveValue('fr');

        options.forEach((option) => {
            expect(selectElement).toContainElement(
                getByTestId(`option-${option.value}`)
            );
        });
    });

    it('calls onChange when an option is selected', () => {
        const handleChange = jest.fn();
        const { getByTestId } = render(
            <Select
                id="language-select"
                value="fr"
                onChange={handleChange}
                options={options}
                fontSize="16px"
            />
        );

        const selectElement = getByTestId('select-component');
        fireEvent.change(selectElement, { target: { value: 'en' } });

        expect(handleChange).toHaveBeenCalledWith('en');
    });
});
