import { render, screen } from '@testing-library/react'
import { Logo } from './components/Logo';

describe('Logo', () => {
    test('renders Background image', () => {
        const {getByTestId} = render(Logo);
        expect(getByTestId('logo_img').toBeInTheDocument);
    });
});