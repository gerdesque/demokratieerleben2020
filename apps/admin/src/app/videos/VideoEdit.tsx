import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput
} from 'react-admin';

const VideoEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput label="Titel" source="title" />
      <TextInput label="URL" source="url" />
      <ReferenceArrayInput source="tagIds" reference="tags">
        <SelectArrayInput label="Tags" optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export default VideoEdit;