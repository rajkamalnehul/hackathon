import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CommonStyles from '../CommonStyles';
import CartItems from './CartItems';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding:20
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const CheckoutSummary = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>

                <Grid item xs={12} sm={12}>
                    <Paper>
                        <div style={CommonStyles.stepsText}>
                    <div
                    style={CommonStyles.stepsLayoutMain}
                    >
                    <div >Cart</div>
                    <div>Address</div>
                    <div>Payment</div></div>
                    <div
                    style={CommonStyles.stepsLayoutSecond}
                    >
                    <div>Remove all</div></div>
                    </div></Paper>
               </Grid></Grid>
               <Grid container spacing={3}>

<Grid item xs={12} sm={8}>
    <CartItems />
    </Grid>
    <Grid item xs={12} sm={4}>
    </Grid>
    </Grid>
               </div>
    )
}
export default CheckoutSummary;