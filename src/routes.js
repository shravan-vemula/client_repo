 
import React from "react";
import { Route } from "react-router-dom";
import LeftNavBar from "js/_components/organisms/_left-navbar";
import BankSelection from 'js/_components/organisms/BankSelection';
import FormLayout from 'js/_components/organisms/FormLayout';

import AccountsPage from "js/_components/organisms/AccountsPage";

import SettingsPage from "/js/_components/organisms/SettingsPage";


export default function Routes() {
  return (
    <>
       <Route path="/SelectBank" component={BankSelection} />
       <Route path="/home" component={LeftNavBar}></Route>

       <Route path="/home/accounts" component={AccountsPage}></Route>

       <Route path={"/settings"}>
          <SettingsPage />
          </Route>

       <Route path="/" exact component={FormLayout} /> 
    </>
  );
}
