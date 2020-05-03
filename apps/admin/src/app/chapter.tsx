import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  EditButton,
  ArrayInput,
  SimpleFormIterator,
  RadioButtonGroupInput
} from 'react-admin';
import { ContentType } from '@gerdesque/data';

export const ChapterList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Name" source="name" />
      <TextField label="Pfad" source="link" />
      <ArrayField label="Inhalt" source="content">
        <SingleFieldList>
          <ChipField source="type" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

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

export const ChapterCreate = props => (
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
