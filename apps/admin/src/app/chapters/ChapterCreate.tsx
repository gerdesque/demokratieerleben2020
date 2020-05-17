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
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export default ChapterCreate;