import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import BtrackerLogo from 'images/Btracker.png';
import {Link, Redirect} from 'react-router-dom';
// import LeftNavBar from 'js/_components/organisms/_left-navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:10
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height:10
  },
  title: {
    flexGrow: 1,
   
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [onClick,setOnClick] = React.useState(false);

  const handleClick = () =>{
    setOnClick(true);
  }

  if(onClick ===  true){
    return <Redirect to="/"/>  
    // return <Redirect to="/leftnav/overview" />
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className="BankSelectBar" color="inherit">
        <Toolbar>
         <div id="logo" onClick={handleClick} data-testId="LogoImg" className="logoBtracker">
            <img src={BtrackerLogo}   className="BtrackerIcon" />
            </div>

            <Button color="inherit" className="logoutButton"><Link to="/" className="logoutRoute"> Logout </Link></Button> 
        </Toolbar>
      </AppBar>
    </div>
  );
}