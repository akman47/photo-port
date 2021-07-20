import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('h1 tag', () => {
    it('h1 displays contact me', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
});

describe('submit button', () => {
    it('button displays submit', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('btn')).toHaveTextContent('Submit');
    });
});