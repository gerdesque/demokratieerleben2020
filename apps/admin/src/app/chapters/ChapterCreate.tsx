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
      <ArrayInput label="Inhalt" source="content">
        <SimpleFormIterator>
          <RadioButtonGroupInput label="Typ" source="type" initialValue="text" choices={[
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
          <FormDataConsumer>
            {({ formData, scopedFormData, getSource,...rest }) => 
            scopedFormData.type === ContentType.Text ? (
              <TextInput multiline label="Wert" source={getSource("value")} {...rest}/>
            ) : null
            }
          </FormDataConsumer>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export default ChapterCreate;