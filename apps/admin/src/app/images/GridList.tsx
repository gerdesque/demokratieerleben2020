import React from 'react';
import MuiGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { Link } from 'react-router-dom';
import { linkToRecord } from 'ra-core';
import { API_URL } from '@gerdesque/data';

//const IMAGE_URL = "https://github.com/gerdesque/demokratieerleben/raw/master/src/assets/fallback/"
const IMAGE_SUFFIX = ".png"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  tileBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
  },
}));


const GridList = ({ ids, data, basePath }) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <MuiGridList cellHeight={360} cols={3}>
              {ids.map(id => (
                  <GridListTile
                      component={Link}
                      key={id}
                      to={linkToRecord(basePath, data[id].id)}
                  >
                      <img src={API_URL+"/"+data[id].url+IMAGE_SUFFIX} alt={data[id].desc} />
                      <GridListTileBar
                            className={classes.tileBar}
                            title={data[id].title}/>
                  </GridListTile>
              ))}
          </MuiGridList>
      </div>
  );
}

export default withWidth()(GridList);
