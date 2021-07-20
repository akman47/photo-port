import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockCurrentCategory}
            currentCategory={mockCurrentCategory} 
        />);

        expect(asFragment()).toMatchSnapshot();
    });
});

// test for emoji visibility
describe('emoji is visible', () => {
    it('inserts emoji into h2', () => {
        // arrange
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

        // assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

// test for link visibility
describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});