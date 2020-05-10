import React from 'react';
import {
  SimpleForm,
  TextInput,
  Create,
  ArrayInput,
  SimpleFormIterator,
  RadioButtonGroupInput
} from 'react-admin';
import { ContentType } from '@gerdesque/data';

const ChapterCreate = props => (
  <Create {...props}>
    <SimpleForm>
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
  </Create>
);

export default ChapterCreate;