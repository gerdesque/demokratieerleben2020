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
      <ArrayInput label="Inhalt" source="content">
        <SimpleFormIterator>
          <RadioButtonGroupInput fullWidth="true" label="Typ" source="type" choices={[
            { id: ContentType.Text, name: 'Text' },
            { id: ContentType.Video, name: 'Video' },
            { id: ContentType.Image, name: 'Bild' },
            { id: ContentType.Game, name: 'Spiel' },
            { id: ContentType.Misc, name: 'Sonstiges' },
          ]} />
          <RadioButtonGroupInput label="Ebene" source="layer" choices={[
            { id: Layer.Fore, name: 'Front' },
            { id: Layer.Base, name: 'Mitte' },
            { id: Layer.Back, name: 'Hinten' },
          ]} />
          <TextInput multiline label="Wert" fullWidth="true" source="value" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default ChapterEdit;