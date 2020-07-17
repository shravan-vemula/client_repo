import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Amount from "js/_components/atoms/_amount";
import Icon from "js/_components/atoms/_icon";

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        left: props => props.left,
        top: props => props.top,
        width: '201px',
        height: '140px',
        borderRadius: '14px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    icon: {
        position: 'absolute',
        top: '18px',
        left: '78px',
    },
    smtitle: {
        position: 'absolute',
        top: '40px',
        left: '0px',
        textAlign: 'center',
        width: '201px',
    },
    amount: {
        position: 'absolute',
        left: '10px',
        top:'20px',
        fontSize: "14px",
    },
    pertext: {
        position: 'absolute',
        top: '81px',
        left: '227px',

    },
    sptext: {
        width: '201px',
        height: '140px',

    },
});

export default function TopCard(props) {
    const classes = useStyles(props);
   

    return (

        <Card className={classes.root} >
            <CardContent>
                <Grid container spacing={2} direction="column" justify="center"  xs={12}  >
                    <Grid item className={classes.icon}  >
                        <Icon />
                    </Grid>
                    <Grid item className={classes.smtitle} >
                        <p>{props.title} </p>
                    </Grid>
                    <Grid item xs={12} className={classes.amount} >
                        <Amount value={props.amount} />
                    </Grid>

                </Grid >
            </CardContent>
        </Card>

    );
}
