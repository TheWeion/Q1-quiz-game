import { default as Intro } from '.';
import { render, screen } from '@testing-library/react';

beforeEach(() => {
	render(<Intro />);
});

describe('Intro', () => {
	it('renders correctly', () => {
		const heading = screen.getByRole('heading');
		expect(heading.textContent).toBe('Introduction');
	});
})