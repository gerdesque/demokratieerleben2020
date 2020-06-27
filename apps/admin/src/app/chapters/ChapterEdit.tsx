import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  RadioButtonGroupInput,
  required
} from 'react-admin';
import { ContentType, Layer } from '@gerdesque/data';

export const ChapterEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput label="Pfad" source="link" validate={required()}/>
      <ArrayInput label="Inhaltsgruppen" source="groups">
        <SimpleFormIterator>
        <TextInput label="Info" source="info" />
          <ArrayInput label="Inhalt" source="content">
            <SimpleFormIterator>
              <TextInput label="Typ" source="type" />
              <TextInput label="Ebene" source="layer" />
              <TextInput label="Titel" source="title" />
              <TextInput multiline label="Wert" fullWidth="true" source="value" />
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default ChapterEdit;