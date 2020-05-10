import React from 'react';
import MuiGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { Link } from 'react-router-dom';
import { linkToRecord } from 'ra-core';

const IMAGE_URL = "https://github.com/gerdesque/demokratieerleben/raw/master/src/assets/fallback/"
const IMAGE_SUFFIX = ".png"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));


const GridList = ({ ids, data, basePath }) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <MuiGridList
              cellHeight={360}
              cols={3}
              className={classes.gridList}
          >
              {ids.map(id => (
                  <GridListTile
                      component={Link}
                      key={id}
                      to={linkToRecord(basePath, data[id].id)}
                  >
                      <img src={IMAGE_URL+data[id].url+IMAGE_SUFFIX} alt={data[id].desc} />
                  </GridListTile>
              ))}
          </MuiGridList>
      </div>
  );
}

export default withWidth()(GridList);
