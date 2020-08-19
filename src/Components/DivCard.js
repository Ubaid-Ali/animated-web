import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        boxShadow: '0 0 5px white',
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(9, 9, 121, 0.3175245098039216) 35%, rgba(0, 211, 255, 0.7567401960784313) 100%)',
    },
    media: {
        height: 140,
    },
    text: {
        color: 'white',
    },
});

export default function DivCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.img} // use props image
                    title={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                        {props.name} {/* use props name*/}
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.text}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" className={classes.text}>
                    Like
                </Button>
                <Button size="small" className={classes.text}>
                    More
                </Button>
            </CardActions>
        </Card>
    );
}
