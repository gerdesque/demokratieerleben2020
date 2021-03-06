import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';

const VideoEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput label="Titel" source="title" />
      <TextInput label="URL" source="url" />
      <ReferenceInput source="tagId" reference="tags">
        <SelectInput label="Tags" optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default VideoEdit;