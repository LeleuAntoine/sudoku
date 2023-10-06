import React from 'react';
import { render } from '@testing-library/react';
import LeftPanel from './LeftPanel';

//TODO
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
}));

describe('LeftPanel Component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<LeftPanel />);

        expect(getByText('sudoku')).toBeInTheDocument();
    });
});
