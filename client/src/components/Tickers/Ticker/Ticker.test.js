import React from "react";
import {shallow} from "enzyme";
import {Ticker} from "./Ticker";

describe('Test <Ticker/>', () => {
    const ticker = shallow(<Ticker />);

    it('Ticker have rendered correctly', () => {
        expect(ticker).toMatchSnapshot();
    })

    it('Ticker is empty object', () => {
        expect(ticker.props.ticker).toBeString();
    })
})

