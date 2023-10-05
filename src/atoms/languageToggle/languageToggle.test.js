import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import LanguageToggle from './LanguageToggle';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key) => key,
        i18n: {
            changeLanguage: jest.fn(),
        },
    }),
}));

test('LanguageToggle switches between languages', () => {
    const {getByText} = render(<LanguageToggle/>);

    const frenchButton = getByText('French');
    const englishButton = getByText('English');

    fireEvent.click(frenchButton);
    expect(frenchButton).toHaveClass('active');
    expect(englishButton).not.toHaveClass('active');

    fireEvent.click(englishButton);
    expect(frenchButton).not.toHaveClass('active');
    expect(englishButton).toHaveClass('active');

    expect(i18n.changeLanguage).toHaveBeenCalledWith('fr');
    expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
});
