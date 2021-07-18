import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensures that after each test, no leftover memeory data for false results
afterEach(cleanup);

describe('About component', () => {
    // baseline test to verify componenet is rendering
    it('renders', () => {
        render(<About />);
    });

    // test case to compare snapshot versions of DOM node structure
    it('matches snapshot DOM node structure', () => {
        // returns snapshot of About component
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})