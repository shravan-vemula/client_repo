import React from 'react';
import {render,cleanup} from '@testing-library/react';
import LeftNavBar from 'js/_components/organisms/_left-navbar';
import{ BrowserRouter } from 'react-router-dom';

afterEach(cleanup)

describe("LeftNavBar Component",()=>{
    it("renders correctly", () => {
        const wrapper = shallow(<LeftNavBar />);
        expect(wrapper).toMatchSnapshot();
      });

    it("should have all the icons", ()=>{
        const{ getAllByRole } = render(<BrowserRouter><LeftNavBar /></BrowserRouter>);
        expect(getAllByRole("img")).toBe;
    });

});