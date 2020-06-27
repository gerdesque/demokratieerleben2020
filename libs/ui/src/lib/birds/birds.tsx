import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './birds.scss';

function Birds() {

  const useStyles = makeStyles(() => ({
    bird: {
      backgroundImage: 'url(./assets/bird-cells.svg)',
      backgroundSize: 'auto 100%'
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className='bird-container bird-container--one'>
        <div className={`bird bird--one ${classes.bird}`}></div>
      </div>

      <div className='bird-container bird-container--two'>
        <div className={`bird bird--two ${classes.bird}`}></div>
      </div>

      <div className='bird-container bird-container--three'>
        <div className={`bird bird--three ${classes.bird}`}></div>
      </div>

      <div className='bird-container bird-container--four'>
        <div className={`bird bird--four ${classes.bird}`}></div>
      </div>
    </>
  );
}

export default Birds;
