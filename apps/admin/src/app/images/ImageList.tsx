import React from 'react';
import { List } from 'react-admin';
import GridList from './GridList';

const ImageList = props => (
  <List {...props}>
    <GridList {...props} />
  </List>
);

export default ImageList;