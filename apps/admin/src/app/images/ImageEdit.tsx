import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';
import Poster from './Poster';

export const ImageEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <Poster {...props}/>
      <TextInput source="url" fullWidth />
      {/* <ReferenceInput source="tag_id" reference="tags">
        <SelectInput source="name" />
      </ReferenceInput> */}
    </SimpleForm>
  </Edit>
);

export default ImageEdit;