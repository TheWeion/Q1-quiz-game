/*** @jest-environment jsdom*/
import React from 'react';
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainMenu from '.';

describe('Main Menu', () => {
    beforeEach(()=>{
        render(<MainMenu />)
    })


    test('img must have an alt="intro',() => {
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('alt', 'logo')
    })
})