import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  RadioButtonGroupInput
} from 'react-admin';
import { ContentType } from '@gerdesque/data';

export const ChapterEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput label="Name" source="name" />
      <TextInput label="Pfad" source="link" />
      <ArrayInput label="Inhalt" source="content">
        <SimpleFormIterator>
          <RadioButtonGroupInput fullWidth="true" label="Typ" source="type" choices={[
            { id: ContentType.Text, name: 'Text' },
            { id: ContentType.Video, name: 'Video' },
            { id: ContentType.Image, name: 'Bild' },
            { id: ContentType.Game, name: 'Spiel' },
            { id: ContentType.Misc, name: 'Sonstiges' },
          ]} />
          <TextInput multiline label="Wert" fullWidth="true" source="value" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default ChapterEdit;