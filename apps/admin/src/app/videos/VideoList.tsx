import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ChipField,
  EditButton,
  ReferenceField
} from 'react-admin';

const VideoList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Titel" source="title" />
      <TextField label="URL" source="url" />
      <ReferenceField source="tagId" reference="tags">
        <ChipField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

export default VideoList;