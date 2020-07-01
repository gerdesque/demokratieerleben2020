import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  FormDataConsumer,
} from 'react-admin';
import {Collections, Games, Apartment, VideoLibrary, TextFields, Link, Details} from '@material-ui/icons';

const renderTypeIcon = (type) => {
  switch (type) {
    case 'video':
      return <VideoLibrary />;
    case 'image':
      return <Collections />;
    case 'memory':
    case 'daily':
    case 'puzzle':
    case 'suitcase':
    case 'tictactoe':
      return <Games />;
    case 'smokingpit':
      return <Apartment />;
    case 'summary':
      return <Details />;
    case 'redirect':
      return <Link />;
    case 'text':
      return <TextFields />;
    default:
      return null;
  }
}

export const ChapterEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput label="Überschrift des Kapitels" source="name" />
      <TextInput disabled label="Link des Kapitels" source="link"/>
      <ArrayInput label="Gruppen von Inhaltselementen" source="groups">
        <SimpleFormIterator>
          <TextInput label="Text für das Info-Icon" source="info" />
          <ArrayInput label="Inhaltselemente" source="content" className="contentarray">
            <SimpleFormIterator>
              <FormDataConsumer>
                {({scopedFormData, getSource}) =>
                  scopedFormData?.type
                  ? <>
                    <TextInput label="Inhaltstyp" source={getSource('type')}/>
                    {renderTypeIcon(scopedFormData.type)}
                  </>
                  : <TextInput label="Inhaltstyp" source="type"/>
                }
              </FormDataConsumer>
              <TextInput multiline label="Text/Wert des Inhaltselements" source="value" />
              <TextInput label="Titel" source="title"/>
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default ChapterEdit;