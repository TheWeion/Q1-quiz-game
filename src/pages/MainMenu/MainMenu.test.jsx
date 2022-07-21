import { default as MainMenu } from '.';
import { render, screen } from '@testing-library/react';

beforeEach(() => {
	render(<MainMenu />);
});

describe('MainMenu', () => {
	it('renders correctly', () => {;
		const img = screen.getByRole('img');
		expect(img.getAttribute('src')).toBe('logo.svg');
	});
})