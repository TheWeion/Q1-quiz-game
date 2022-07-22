/*** @jest-environment jsdom*/
import React from 'react';
import {screen, render, within} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rules from '.';

describe('Rules', () => {
    beforeEach(()=>{
        render(<Rules />)
    })

    test('shows 9 items in the list ', ()=>{
        const list = screen.getByRole('list');
        const { getAllByRole } = within(list);
        const items = getAllByRole("listitem");
        expect(items.length).toBe(9)
    })

    
})
