import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { IMAGE_SUFFIX } from '@gerdesque/data';


function Rain() {

  const useStyles = makeStyles(() => ({
    rain: {
      background: `url(./assets/rain${IMAGE_SUFFIX})`
    },
  }));
  const classes = useStyles();

  return <div className={`rain ${classes.rain}`}></div>;
};

export default Rain;
