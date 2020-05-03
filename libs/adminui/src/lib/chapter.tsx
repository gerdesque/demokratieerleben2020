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
  ReferenceInput,
  SelectInput,
  Create,
  EditButton,
  ArrayInput,
  SimpleFormIterator,
  RadioButtonGroupInput
} from 'react-admin';

export const ChapterList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Name" source="name" />
      <TextField label="Pfad" source="link" />
      <ArrayField label="Inhalt" source="content"><SingleFieldList><ChipField source="type" /></SingleFieldList></ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

export const ChapterEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="link" />
      <ArrayInput source="content">
        <SimpleFormIterator>
          <RadioButtonGroupInput label="Typ" source="type" choices={[
            { id: 'text', name: 'Text' },
            { id: 'video', name: 'Video' },
            { id: 'image', name: 'Bild' },
            { id: 'game', name: 'Spiel' },
            { id: 'misc', name: 'Sonstiges' },
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
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput source="link" />
    </SimpleForm>
  </Create>
);
