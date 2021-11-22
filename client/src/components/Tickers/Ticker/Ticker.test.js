import React from "react";
import {screen, render} from '@testing-library/react';
import {Ticker} from "./Ticker";

describe('Ticker', () => {
    it('render Ticker component', () => {
        render(<Ticker />)
        screen.debug()
        screen.getByRole('listitem')
    })
})

