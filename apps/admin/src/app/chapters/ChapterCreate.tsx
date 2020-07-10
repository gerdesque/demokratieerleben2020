import React from 'react';
import {
  SimpleForm,
  TextInput,
  Create,
  ArrayInput,
  SimpleFormIterator,
  required
} from 'react-admin';

const ChapterCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput label="Pfad" source="link" validate={required()}/>
      <ArrayInput label="Inhaltsgruppen" source="groups">
        <SimpleFormIterator>
          <TextInput label="Info" source="info" />
          <ArrayInput label="Inhalt" source="content" className="contentarray">
            <SimpleFormIterator>
              {/* <TextInput label="Typ" source="type" />
              <TextInput label="Ebene" source="layer" /> */}
              <TextInput label="Titel" source="title" />
              <TextInput multiline label="Wert" source="value" />
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export default ChapterCreate;