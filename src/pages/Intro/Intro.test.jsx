/*** @jest-environment jsdom*/
import React from 'react';
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Intro from '.';

describe('Intro', () => {
    beforeEach(()=>{
        render(<Intro />)
    })

    test('Displays the heading', ()=>{
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toBe("Introduction")
    })

    test('img must have an alt="intro',() => {
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('alt', 'intro')
    })
})