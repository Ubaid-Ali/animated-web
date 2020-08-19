import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import DivCard from './DivCard'

// anomation library
import AOS from 'aos';
AOS.init();


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        padding: '1%',
    },

    grid2: {
        display: 'flex',
        justifyContent: 'center',
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        boxShadow: '0 0 10px white'
    },
}));


export default function Div3() {
    const classes = useStyles();


    // jsx start from here
    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.grid}>

                <Grid item xs={12} className={classes.grid}>
                    <Paper
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        className={classes.paper}>
                        <h1> Improving Perceptual Quality </h1>
                    </Paper>
                </Grid >
                <Grid item xs={12} sm={6} className={classes.grid2}
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <DivCard name='Flowers' img='https://images2.alphacoders.com/457/thumb-1920-457879.jpg' />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.grid2}
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <DivCard name='Art Design' img='https://images6.alphacoders.com/316/thumb-1920-316656.jpg' />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.grid2}
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <DivCard name='3d Design' img='https://images2.alphacoders.com/995/thumb-1920-995492.jpg' />
                </Grid>
                
            </Grid>
        </div>
    );
}
