import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  AutocompleteInput
} from 'react-admin';
import Poster from './Poster';

export const ImageEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <Poster {...props}/>
      <TextInput label="URL" source="url"/>
      <ReferenceInput source="tagId" reference="tags">
        <AutocompleteInput label="Tags" optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default ImageEdit;