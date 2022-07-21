import React from 'react';
import { default as Leaderboard } from '.';
import { render, screen } from '@testing-library/react';

beforeEach(() => {
	render(<Leaderboard />);
});

describe('Leaderboard', () => {
	it('renders correctly', () => {
		const heading = screen.getByRole('heading');
		expect(heading.textContent).toBe('Leaderboard');
	});
})