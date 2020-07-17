import React from 'react';
import { Typography, makeStyles, Card, CardContent, Grid,Box } from '@material-ui/core';
import RupeeIcon from 'js/_components/atoms/_rupee-icon';
import InflowIcon from 'images/inflow-icon.png';
import PiggyIcon from 'images/piggy-card-icon.png';
import { myTheme } from 'theme';

const useStyles = makeStyles(() => ({
    topCard:{
        width: '296px',
        height: '172px',
        borderRadius: '14px',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    heading:{
        width: '69px',
        height: '30px',
        color:myTheme.palette.secondary.main,
        fontSize:'22px',
        margin:'4px 0 0 12px',
    },
    currency:{
        marginLeft:'-10px',
        fontSize:'36px',
        color:myTheme.palette.default.main,
    },
    footerMonth:{
        margin:'0 4px 0 18px',
        fontSize:'16px',
        color:myTheme.palette.secondary.main,
    },
    footerPrice:{
        marginLeft:'3px',
        fontSize:'16px',
        color:myTheme.palette.default.main,
    },
    inflowIcon:{
        height:'25px',
        width:'25px',
        marginTop:'25px',
    },
    inflowValue:{
        fontSize:'14px',
        color:myTheme.palette.secondary.main,
        marginBottom:'20px',
    },

}));

const BudgetMetricsCard = ({ heading,value,inflow }) => {
    const classes = useStyles();
    const size = "small";
    let metricValue =  heading === "Spent" ? 0 : value;
    if(heading === "Inflow"){
        metricValue=inflow;
    }
    return (
        <div>
             <Card className={classes.topCard} elevation={2}>
                    <CardContent>
                            <Grid container>
                                <Grid item>
                                    <img src={PiggyIcon} />
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.heading}>
                                        {heading}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                            <Box m={2.5}>
                                <RupeeIcon />
                            </Box>    
                            <Typography component="div">
                            <Box fontWeight={500} m={1.5} className={classes.currency}>
                                {metricValue} 
                            </Box>
                            </Typography>
                            {
                                heading === "Inflow" && 
                                <Grid item>
                                <Box>
                                <img src={InflowIcon} className={classes.inflowIcon} />
                                </Box>    
                                <Typography component="div">
                                <Box  className={classes.inflowValue}>
                                    18.5%
                                </Box>
                                </Typography>
                                </Grid>
                            }
                            </Grid>
                            { heading === "Budget" && 
                            <Grid container>
                                <Typography variant="p" className={classes.footerMonth}>
                                    Last month:
                                </Typography>
                                <RupeeIcon size={size}/>
                                <Typography variant="p" className={classes.footerPrice}>
                                    30,000
                                </Typography>
                            </Grid>
                            }
                    </CardContent>
                </Card>
        </div>
    );
};
export default BudgetMetricsCard;