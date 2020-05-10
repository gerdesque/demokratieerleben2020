import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';

const GameList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Name" source="title" />
      <TextField label="Beschreibung" source="desc" />
      <EditButton />
    </Datagrid>
  </List>
);

export default GameList;