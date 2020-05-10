import React from 'react';
import {
  SimpleForm,
  TextInput,
  Create
} from 'react-admin';

const ChapterCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Name" source="title" />
      <TextInput multiline label="Beschreibung" source="desc" />
    </SimpleForm>
  </Create>
);

export default ChapterCreate;