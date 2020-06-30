import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  TextField,
  FormDataConsumer,
  required
} from 'react-admin';
import ImageIcon from '@material-ui/icons/Collections';

export const ChapterEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput label="Pfad" source="link" validate={required()}/>
      <ArrayInput label="Inhaltsgruppen" source="groups">
        <SimpleFormIterator>
          <TextInput label="Info" source="info" />
          <ArrayInput label="Inhalt" source="content" className="contentarray">
            <SimpleFormIterator>
              {/* <TextInput label="Typ" source="type" />
              <TextInput label="Ebene" source="layer" /> */}
              <FormDataConsumer>
                {({ getSource, scopedFormData }) => {
                  return (
                    <TextField
                          source={getSource('layer')}
                          record={scopedFormData}
                      />
                  );
                }}
              </FormDataConsumer>
              {/* {type === 'image' && <ImageIcon />} */}
              <TextInput label="Titel" source="title" />
              <TextInput multiline label="Wert" source="value" />
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default ChapterEdit;