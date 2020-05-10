import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';

const TagList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export default TagList;