import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuItemsList from "js/_components/molecules/_menu-list-items";
import Temporary from "js/_components/atoms/_temporary";
import { Route, Switch } from "react-router-dom";
import MenuIcon from "js/_components/atoms/_menu-icon";
import Overview from "js/_components/organisms/_overview";
import BudgetDashboard from "js/_components/templates/_budget-dashboard";

import { myTheme } from "theme";
import HomePageHeader from "./HomePageHeader";
import AccountsPage from "./AccountsPage";


const drawerWidth = 86;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor:myTheme.palette.background.default,
    // height:'950px',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuItems: {
    marginTop: "96px",
  },
}));

const LeftNavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomePageHeader />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <MenuIcon />
        <div className={classes.menuItems}>
          <MenuItemsList />
        </div>
      </Drawer>
      <div className={classes.content}>
        <Switch>
          <Route path="/home/income">
            <Temporary />
          </Route>
          <Route path="/home/expenses">
          <Temporary />
          </Route>
          <Route path="/home/budget">
          <BudgetDashboard />
          </Route>
          <Route path="home/accounts">
            <AccountsPage />
          </Route>
          <Route path="/home/overview">
          <Overview />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default LeftNavBar;
