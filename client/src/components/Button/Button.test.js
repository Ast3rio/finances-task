import React from "react";
import {Button} from "./Button";
import renderer from 'react-test-renderer';

describe('Test <Button/>', () => {
    it('Button have renderer correctly', () => {
        const button = renderer.create(<Button />).toJSON();
        expect(button).toMatchSnapshot();
    })
})
