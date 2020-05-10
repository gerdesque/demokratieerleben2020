import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';

export const ImageCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="URL" source="url"/>
      <ReferenceInput source="tagId" reference="tags">
        <SelectInput label="Tags" optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default ImageCreate;