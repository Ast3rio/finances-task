import React from "react";
import {render, screen} from '@testing-library/react';
import { Button } from "./Button";

describe("Button", () => {
    it('render Button component', () => {
        render(<Button />)
        screen.debug()
        screen.getByRole('button')
    })
})
