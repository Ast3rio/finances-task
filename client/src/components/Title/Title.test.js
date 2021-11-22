import React from "react";
import { render, screen } from "@testing-library/react";
import { Title } from './Title';

describe('Title', () => {
    it('render Title component', () => {
        render(<Title />)
        screen.debug()
    })
})
