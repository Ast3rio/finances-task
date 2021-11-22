import React from "react";
import {screen, render} from '@testing-library/react';
import { Tickers } from './Tickers';

describe('Tickers', () => {
    it('render Tickers component', () => {
        render(<Tickers />)
        screen.getByRole('button')
        screen.debug()
        screen.getByRole('list')
        screen.debug()
    })
})
