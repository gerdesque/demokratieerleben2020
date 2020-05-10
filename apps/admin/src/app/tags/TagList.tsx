import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';

import LinkToRelatedImages from './LinkToRelatedImages';

const TagList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <LinkToRelatedImages {...props}/>
      <EditButton />
    </Datagrid>
  </List>
);

export default TagList;