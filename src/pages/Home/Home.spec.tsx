import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('should render heading', () => {
	render(<Home />);
	const heading = screen.getByText(/A better way/i);
	expect(heading).toBeInTheDocument();
});

test('should render sub-heading', () => {
	render(<Home />);
	const subheading = screen.getByText(/Be the first to know when we launch./i);
	expect(subheading).toBeInTheDocument();
});

test('should render request invite button', () => {
	render(<Home />);
	const requestButton = screen.getByRole('button', { name: /Request an invite/i });
	expect(requestButton).toBeInTheDocument();
});
