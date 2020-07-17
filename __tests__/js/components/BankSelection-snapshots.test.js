import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import SideText1 from 'js/_components/atoms/SideText1';
import SideText from 'js/_components/organisms/SideText';
import BankSelectionLayout1 from 'js/_components/molecules/BankSelectionLayout1';
import BankSelection from 'js/_components/organisms/BankSelection';
import BankSelectionLayout2 from 'js/_components/molecules/BankSelectionLayout2';
import SideText2 from 'js/_components/atoms/SideText2';
import SideText3 from 'js/_components/atoms/SideText3';
import BankSelectionHeaderText from 'js/_components/atoms/BankSelectionHeaderText';
import BankTiles from 'js/_components/organisms/BankTiles';

describe('FormLayout', () =>{
    test('renders form layout', () =>{
        render(<Router><BankSelectionLayout1 /></Router>);
        expect(screen.getByText('See all your money in one place')).toBe;
        render(<Router><SideText1 /></Router>);
        expect(screen.getByText('Three easy steps to get started with Mint')).toBe;
        render(<Router><SideText /></Router>);
        expect(screen.getByText('Serious about security')).toBe;
        expect(screen.getByText('Over 300 million accounts added')).toBe;

    })


    it("renders BankSelection correctly", () => {
        const wrapper = shallow(
            <BankSelection /> 
        );
        expect(wrapper).toMatchSnapshot();
      });


    it("renders BankSelectionLayout1 correctly", () => {
        const wrapper = shallow(
            <BankSelectionLayout1 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });
      
      it("renders BankSelectionLayout2 correctly", () => {
        const wrapper = shallow(
            <BankSelectionLayout2 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders SideText correctly", () => {
        const wrapper = shallow(
            <SideText /> 
        );
        expect(wrapper).toMatchSnapshot();
      });
      it("renders SideText1 correctly", () => {
        const wrapper = shallow(
            <SideText1 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders SideText2 correctly", () => {
        const wrapper = shallow(
            <SideText2 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders SideText3 correctly", () => {
        const wrapper = shallow(
            <SideText3 /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it("renders BankSelectionHeaderText correctly", () => {
        const wrapper = shallow(
            <BankSelectionHeaderText /> 
        );
        expect(wrapper).toMatchSnapshot();
      });

      it('Bank tiles test',() =>{
        const {getByTestId} = render(<Router><BankTiles /> </Router>)
        expect(screen.getByTestId('tileCLick')).toBe
        fireEvent.click(getByTestId('tileCLick'))
        
      })

}); 