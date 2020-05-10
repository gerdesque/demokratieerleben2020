import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const IMAGE_URL = "https://github.com/gerdesque/demokratieerleben/raw/master/src/assets/fallback/"
const IMAGE_SUFFIX = ".png"

const useStyles = makeStyles({
    root: { display: 'inline-block', marginTop: '1em', zIndex: 2 },
    content: { padding: 0, '&:last-child': { padding: 0 } },
    img: {
        width: 'initial',
        minWidth: 'initial',
        maxWidth: '42em',
        maxHeight: '15em',
    },
});

const Poster = ({ record }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <img src={IMAGE_URL+record.url+IMAGE_SUFFIX} alt="" className={classes.img} />
            </CardContent>
        </Card>
    );
};

export default Poster;
