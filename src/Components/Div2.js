import React from 'react'

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

// animation library
// https://github.com/michalsnik/aos
import AOS from 'aos';
AOS.init();


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        backgroundImage: `url(https://images6.alphacoders.com/323/thumb-1920-323085.jpg)`,
        backgroundBlendMode: 'lighten',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow: '0 0 10px black',
        width: '100%',
        height: '500px',
    },

    grid2: {
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },

    p: {
        color: 'red',
        padding: '25% 12%',
        zIndex: 5,
    },

    button: {
        marginTop: '5%',
        margin: theme.spacing(1),
        boxShadow: '0 0 5px white',
        backgroundColor: 'red',
    },
}));

const Div2 = () => {
    const classes = useStyles();


    // jsx start from here
    return (
        <div className={classes.root}>
            <Grid container spacing={4}

            >
                <Grid item xs={6} sm={6} className={classes.grid2} >
                    <p className={classes.p}
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                    >
                        Adipisicing excepteur commodo excepteur deserunt aute elit labore et adipisicing aliquip veniam pariatur.
                        <br />
                        This Button uses a Font Icon, see the installation instructions in the Icon component docs.
                        <br />
                        <Button
                            data-aos="flip-left"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<Icon>send</Icon>}
                        >
                            Get Started
                        </Button>
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Div2
