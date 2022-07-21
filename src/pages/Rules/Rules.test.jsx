import { default as Rules } from '.';
import { render, screen } from '@testing-library/react';

beforeEach(() => {
	render(<Rules />);
});

describe('Rules', () => {
	it('renders correctly', () => {
		const heading = screen.getByRole('heading');
		expect(heading.textContent).toBe('Rules');
	});
});