import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BankLogoTile from '../atoms/BankLogoTile';
import AxisLogo from 'images/Axis.png';
import HdfcLogo from 'images/hdfc.png';
import SbiLogo from 'images/sbi.jpg';
import RBSLogo from 'images/RBS.jpg';
import UnionLogo from 'images/Union.png';
import PaytmLogo from 'images/paytm.jpeg';
import {Link, Redirect} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
     
    },
  }));

function BankTiles() {
  

  const [onClickTile,setOnClickTitle] = React.useState(false)
    const classes = useStyles();

  const handleClick = () => {
    setOnClickTitle(true);
  }

  if(onClickTile === true){
     return <Redirect to="/SelectBank/LoginPage" />
  }

  return (
    <div className={classes.root} id="bank-tiles">
      
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
        
        <Grid item xs={4}>
         <Link
           to={{
              pathname:'/SelectBank/RedirectLogin',
              state:{
                logo:AxisLogo,
                url : 'https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/?_ga=2.84227098.2090745026.1593530742-162983518.1593530742'
              }
         }}
          >
          
          <Paper  className={classes.paper}><BankLogoTile  source={AxisLogo}/></Paper></Link>
        </Grid>
        <Grid item xs={4}>
        <Link
           to={{
              pathname:'/SelectBank/LoginPage',
              state:{
                logo:HdfcLogo,
                placeHolder : 'Enter HDFC Bank Id'
              }
         }}
         data-testId="tileCLick"
          onClick={handleClick}
          ><Paper className={classes.paper}><BankLogoTile source={HdfcLogo}/></Paper></Link>
        </Grid>
        <Grid item xs={4}>
        <Link
           to={{
              pathname:'/SelectBank/RedirectLogin',
              state:{
                logo:SbiLogo,
                url : 'https://retail.onlinesbi.com/retail/login.htm'
              }
         }}
          onClick={handleClick}
          ><Paper className={classes.paper}><BankLogoTile source={SbiLogo}/></Paper></Link>
        </Grid>

          {/* <FormRow /> */}
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
        <Link
           to={{
              pathname:'/SelectBank/LoginPage',
              state:{
                logo:UnionLogo,
                placeHolder : 'Enter Unionbank Id'
              }
         }}
          onClick={handleClick}
          ><Paper className={classes.paper}><BankLogoTile data-testId="tileCLickLogin" source={UnionLogo}/></Paper></Link>
        </Grid>
        <Grid item xs={4}>
        <Link
           to={{
              pathname:'/SelectBank/RedirectLogin',
              state:{
                logo:RBSLogo,
                url : 'https://www.rbsdigital.com/Default.aspx?CookieCheck=2020-07-01T04:47:34',
              }
         }}
          onClick={handleClick}
          > <Paper className={classes.paper}><BankLogoTile source={RBSLogo}/></Paper></Link>
        </Grid>
        <Grid item xs={4}>
        <Link
           to={{
              pathname:'/SelectBank/LoginPage',
              state:{
                logo:PaytmLogo,
                placeHolder : 'Enter Paytm Id'
              }
         }}
          onClick={handleClick}
          > <Paper className={classes.paper}><BankLogoTile source={PaytmLogo}/></Paper></Link>
        </Grid>
          {/* <FormRow /> */}
        </Grid>
      </Grid>
      
    </div>
  );
}

export default BankTiles
