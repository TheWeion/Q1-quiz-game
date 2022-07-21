/*** @jest-environment jsdom*/
import React from 'react';
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Leaderboard from '.';
import { Provider } from 'react-redux';

describe('Intro', () => {
    beforeEach(()=>{
        render(<Provider>
                <Leaderboard />
            </Provider>)
    })

    test('Displays the heading Leaderboard', ()=>{
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toBe("Leaderboard")
    })

})