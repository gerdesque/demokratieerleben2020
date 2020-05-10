import React from 'react';
import {
  SimpleForm,
  TextInput,
  Create,
  ReferenceInput,
  SelectInput
} from 'react-admin';

const VideoCreate = props => (
  <Create {...props}>
    <SimpleForm>
    <TextInput label="Titel" source="title" />
      <TextInput label="URL" source="url" />
      <ReferenceInput source="tagId" reference="tags">
        <SelectInput label="Tags" optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default VideoCreate;