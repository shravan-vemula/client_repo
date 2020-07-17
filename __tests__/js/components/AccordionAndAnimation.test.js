import React from 'react';
import AccordionForAccounts from 'js/_components/molecules/AccordionForAccounts';
import { render, screen, fireEvent } from '@testing-library/react';
import {BrowserRouter as Router, MemoryRouter} from 'react-router-dom';
import CircularProgressForLink from 'js/_components/atoms/CircularProgressForLink';
import LinkCheckPoints from 'js/_components/atoms/LinkCheckPoints';
import AnimantionModalSuccess from 'js/_components/atoms/AnimationModalSuccess';
import AccountsPage from 'js/_components/organisms/AccountsPage';



const fetch = jest.fn();
global.fetch = fetch;

beforeEach(() => {
  fetch.mockClear();

  fetch.mockResolvedValue({
    key: "value", // return value on fetch resolve
  });
});


describe('Acoordion renders correctly', () =>{

    test('renders AccountsPage', () =>{
        render(<Router><AccountsPage /></Router>);
        expect(screen.getAllByText("Accounts")).toBe;
    })  



    it("Accordion snapshot", () => {
        const wrapper = shallow(<Router><AccordionForAccounts /> </Router>);
        expect(wrapper).toMatchSnapshot();
      });


    test('renders accordion', () =>{
        render(<Router><AccordionForAccounts /></Router>);
        expect(screen.getByText('Balance amount in budget')).toBe;
        screen.debug();
    })    

    it("Accordion click",() =>{
        const { getByTestId } =  render(<Router><AccordionForAccounts /></Router>);
        expect(getByTestId("AccordionSummaryBudget")).toBe;
        fireEvent.click(getByTestId("AccordionSummaryBudget"), {
        });
        
    });

    test('renders AnimantionModalSuccess and click goToOverView', () =>{
        const { getByTestId } = render(<Router><AnimantionModalSuccess placeHolder={"Enter Andhra Bank Id"}/></Router>);
        expect(getByTestId("goToOverView")).toBe
        fireEvent.click(getByTestId("goToOverView"))

    })  

    test('renders AnimantionModalSuccess and click  ', () =>{
        const { getByTestId } = render(<Router><AnimantionModalSuccess placeHolder={"Enter Andhra Bank Id"}/></Router>);
        expect(getByTestId("addAnotherAccount")).toBe
        fireEvent.click(getByTestId("addAnotherAccount"))
    })  
    
    test('renders LinkCheckPoints', () =>{
        render(<Router><LinkCheckPoints /></Router>);

    })  

    it("Snapshot CircularProgressForLink", () => {
        const wrapper = shallow(<Router><CircularProgressForLink /> </Router>);
        expect(wrapper).toMatchSnapshot();
      });

    it("SnapSHot LinkCheckPoints", () => {
        const wrapper = shallow(<Router><LinkCheckPoints /> </Router>);
        expect(wrapper).toMatchSnapshot();
      });



});
