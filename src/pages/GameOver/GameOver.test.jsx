import React from 'react';
import { default as GameOver } from '.';
import { render, screen } from '@testing-library/react';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
	const originalRouterDom = jest.requireActual('react-router-dom');
	return {
		__esModule: true,
		...originalRouterDom,
		useNavigate: () => mockNavigate
	};
});

describe('GameOver', () => {
	it('renders correctly', () => {
		render(<GameOver />);
		const heading = screen.getByRole('heading');
		expect(heading.textContent).toBe('Podium');
	});
})