import React from "react";
import {Tickers} from "./Tickers";
import {shallow} from "enzyme";

describe('Test <Tickers/>', () => {
    it('Tickers have renderer correctly', () => {
        const tickers = shallow(<Tickers />);
        expect(tickers).toMatchSnapshot();
    })
})
