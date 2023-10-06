import React from 'react';
import LanguageToggle from './LanguageToggle';
import { render, screen } from '@testing-library/react';
import i18n from '../../i18n';

test('renders LanguageToggle component', () => {
    i18n.init();
    render(<LanguageToggle />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
});
