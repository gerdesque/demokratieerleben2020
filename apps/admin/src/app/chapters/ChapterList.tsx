import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
  EditButton,
} from 'react-admin';

const ChapterList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Name" source="name" />
      <TextField label="Pfad" source="link" />
      <ArrayField label="Inhalt" source="content">
        <SingleFieldList>
          <ChipField source="type" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

export default ChapterList;