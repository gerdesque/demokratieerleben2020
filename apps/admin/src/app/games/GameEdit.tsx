import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput
} from 'react-admin';

export const GameEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput label="Name" source="title" />
      <TextInput label="Beschreibung" source="desc" />
    </SimpleForm>
  </Edit>
);

export default GameEdit;