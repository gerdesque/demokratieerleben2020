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
      <TextField source="name" />
      <TextField label="Pfad" source="link" />
      <ArrayField label="Inhaltsgruppen" source="groups">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

export default ChapterList;