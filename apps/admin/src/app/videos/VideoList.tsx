import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  SingleFieldList,
  ChipField,
  EditButton,
  ReferenceArrayField
} from 'react-admin';

const VideoList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Titel" source="title" />
      <TextField label="URL" source="url" />
      <ReferenceArrayField source="tagIds" reference="tags">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

export default VideoList;