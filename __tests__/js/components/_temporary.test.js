import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Temporary from 'js/_components/atoms/_temporary';
import {render,cleanup} from '@testing-library/react';

afterEach(cleanup);

describe("Temporary Component",() =>{
    it("renders correctly", () => {
        const wrapper = shallow(<Temporary />);
        expect(wrapper).toMatchSnapshot();
      });
    it("should have heading", () =>{
        const { getByText } =render(<BrowserRouter><Temporary /></BrowserRouter>);
        expect(getByText("Screen is yet to be designed")).toBe;

    });

});

