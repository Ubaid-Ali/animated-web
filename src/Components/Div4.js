import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

// import avatar images
import img1 from '../Images/avatar/avatar1.png';
import img2 from '../Images/avatar/avatar2.png';
import img3 from '../Images/avatar/avatar3.png';
import img4 from '../Images/avatar/avatar4.png';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '7% 0',
        flexGrow: 1,
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    imgs: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    img: {
        backgroundColor: 'rgba(150, 150, 150, 0.1)',
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(9, 9, 121, 0.3175245098039216) 35%, rgba(0, 211, 255, 0.7567401960784313) 100%)', color: 'white',
        textAlign: 'center'
    },
    large: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        margin: 'auto'
    },
    p: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        color: 'rgba(0, 0, 0, 0.9)',
        margin: '4%',
        padding: '4%',
        borderRadius: '10px'
    }
}));


export default function Div4() {
    const classes = useStyles();


    // jsx start from here
    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.imgs}>

                <Grid item xs={12} className={classes.grid}>
                    <Paper
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        className={classes.paper}>
                        <h1> Customers Feedback </h1>
                    </Paper>
                </Grid >
                <Grid item xs={6} sm={3} className={classes.img}>
                    <Paper className={classes.paper}
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <Avatar alt="Remy Sharp" src={img1} className={classes.large} />
                        <p className={classes.p}>
                            Voluptate id tempor enim et enim enim eu.
                        </p>
                    </Paper>

                </Grid>
                <Grid item xs={6} sm={3} className={classes.img}>
                    <Paper className={classes.paper}
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <Avatar alt="Remy Sharp" src={img2} className={classes.large} />
                        <p className={classes.p}>
                            Voluptate id tempor enim et enim enim eu.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} className={classes.img}>
                    <Paper className={classes.paper}
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <Avatar alt="Remy Sharp" src={img3} className={classes.large} />
                        <p className={classes.p}>
                            Voluptate id tempor enim et enim enim eu.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} className={classes.img}>
                    <Paper className={classes.paper}
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <Avatar alt="Remy Sharp" src={img4} className={classes.large} />
                        <p className={classes.p}>
                            Voluptate id tempor enim et enim enim eu.
                        </p>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
