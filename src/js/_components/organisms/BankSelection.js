import React, { Component } from 'react'
import BankSelectionLayout1 from '../molecules/BankSelectionLayout1';
import BankSelectionLayout2 from '../molecules/BankSelectionLayout2';
import NavBar from './Navbar';
import 'js/_components/BankSelection.css';
import { Switch,Route} from 'react-router-dom';
import LoginPage from 'js/_components/organisms/LoginPage';
import BankPageRedirect from '../molecules/BankPageRedirect';

export class BankSelection extends Component {
    render() {
        return (
        <>
            <div id="nav-bar" className="navbar"  style={{fontFamily:"Inter,sans-serif"}}>
            <NavBar />
            </div>
            <div id="bank-selection" className="bankSelection"  style={{fontFamily:"Inter,sans-serif"}}>
                
                    <Switch>

                    <Route path="/SelectBank/BankTiles" exact component={LoginPage} > 
                        <BankSelectionLayout1 />
                    </Route>
                        <Route path="/SelectBank/LoginPage" exact component={LoginPage} >
                            <LoginPage />    
                        </Route>
                        <Route path="/SelectBank/RedirectLogin" exact component={BankPageRedirect} >
                            <BankPageRedirect />    
                        </Route>

                    </Switch>
                
                <BankSelectionLayout2 />
            </div>
        </>
        )
    }
}

export default BankSelection
