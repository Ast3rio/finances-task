import React from "react";
import {Title} from "./Title";
import renderer from 'react-test-renderer';

describe('Test <Title/>', () => {
    it('Title have renderer correctly', () => {
        const title = renderer.create(<Title />).toJSON();
        expect(title).toMatchSnapshot();
    })
})

