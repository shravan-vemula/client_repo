import React from 'react';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import {BrowserRouter as Router, MemoryRouter} from 'react-router-dom';
import SearchBar from 'js/_components/atoms/SearchBar';


describe('SearchBar renders correctly', () =>{
    test('Redirects to bank login page ', () =>{
        const {getByTestId} = render(<Router><SearchBar /></Router>);
        const AutoCompleteSearch = getByTestId('SearchBarTest');
        const autocomplete = getByRole(AutoCompleteSearch, 'textbox')
        autocomplete.focus()
        fireEvent.change(document.activeElement, { target: { value: 'an' } })
        fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' })
        fireEvent.keyDown(document.activeElement, { key: 'Enter' })
    })
    test('Redirects to bank redirect page ', () =>{
        const {getByTestId} = render(<Router><SearchBar /></Router>);
        const AutoCompleteSearch = getByTestId('SearchBarTest');
        const autocomplete = getByRole(AutoCompleteSearch, 'textbox')
        autocomplete.focus()
        fireEvent.change(document.activeElement, { target: { value: 'an' } })
        fireEvent.keyDown(document.activeElement, { key: 'Enter' })
    })
    it("SearchBar snap shot", () => {
        const wrapper = shallow(<Router><SearchBar /> </Router>);
        expect(wrapper).toMatchSnapshot();
      });

    
});