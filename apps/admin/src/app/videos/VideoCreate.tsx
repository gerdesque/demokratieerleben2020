import React from 'react';
import {
  SimpleForm,
  TextInput,
  Create,
  ReferenceArrayInput,
  SelectArrayInput
} from 'react-admin';

const VideoCreate = props => (
  <Create {...props}>
    <SimpleForm>
    <TextInput label="Titel" source="title" />
      <TextInput label="URL" source="url" />
      <ReferenceArrayInput source="tagIds" reference="tags">
        <SelectArrayInput label="Tags" optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);

export default VideoCreate;