import React from 'react';
import {
  SimpleForm,
  TextInput,
  Create
} from 'react-admin';

const TagCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export default TagCreate;