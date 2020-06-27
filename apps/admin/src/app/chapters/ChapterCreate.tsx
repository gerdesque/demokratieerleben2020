import React from 'react';
import {
  SimpleForm,
  TextInput,
  Create,
  ArrayInput,
  SimpleFormIterator,
  RadioButtonGroupInput,
  FormDataConsumer,
  required
} from 'react-admin';
import { ContentType, Layer } from '@gerdesque/data';

const ChapterCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput label="Pfad" source="link" validate={required()}/>
      <ArrayInput label="Inhaltsgruppen" source="groups">
        <SimpleFormIterator>
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
  </Create>
);

export default ChapterCreate;