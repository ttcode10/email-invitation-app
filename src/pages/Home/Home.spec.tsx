import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('should show modal after clicking the request button', async () => {
	const user = userEvent.setup();
	const { getByTestId, queryByRole } = render(<Home />);

	const button = getByTestId('requestEmailButton');
	const modal = queryByRole('dialog');

	expect(modal).not.toBeInTheDocument();
	user.click(button);
	expect(await screen.findByRole('dialog')).toHaveTextContent('Request an invite');
});
