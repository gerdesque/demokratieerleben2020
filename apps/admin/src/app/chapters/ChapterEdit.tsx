import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  FormDataConsumer,
  Toolbar,
  Filter,
  SaveButton
} from 'react-admin';
import {Collections, Games, VideoLibrary, TextFields, Link, Details} from '@material-ui/icons';

const renderTypeIcon = (type) => {
  switch (type) {
    case 'video':
      return <VideoLibrary />;
    case 'image':
    case 'smokingpit':
      return <Collections />;
    case 'memory':
    case 'daily':
    case 'puzzle':
    case 'suitcase':
    case 'tictactoe':
      return <Games />;
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

const EditToolbar = props => (
  <Toolbar {...props} >
    <SaveButton />
  </Toolbar>
);

const EditFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const ChapterEdit = props => (
  <Edit {...props}>
    <SimpleForm toolbar={<EditToolbar />} filters={<EditFilter />}>
      <TextInput disabled source="id" />
      <TextInput label="Überschrift des Kapitels" source="name" />
      <TextInput disabled label="Link des Kapitels" source="link"/>
      <ArrayInput label="Gruppen von Inhaltselementen" source="groups">
        <SimpleFormIterator disableRemove disableAdd>
          <TextInput label="Text für das Info-Icon" source="info" />
          <FormDataConsumer>
            {({scopedFormData, getSource}) =>
              scopedFormData.character ? <TextInput label="Gruppe für folgenden Avatar" source={getSource('character')}/> : null
            }
          </FormDataConsumer>
          <ArrayInput label="Inhaltselemente" source="content" className="contentarray">
            <SimpleFormIterator disableRemove disableAdd>
              <FormDataConsumer>
                {({scopedFormData}) =>
                  scopedFormData.type ? renderTypeIcon(scopedFormData.type) : null
                }
              </FormDataConsumer>
              <FormDataConsumer>
                {({scopedFormData, getSource}) =>
                  scopedFormData.type === 'text' ? 
                  <TextInput multiline label="Text/Wert des Inhaltselements" source={getSource('value')} /> : 
                  <TextInput disabled multiline label="Text/Wert des Inhaltselements" source={getSource('value')} />
                }
              </FormDataConsumer>
              <FormDataConsumer>
                {({scopedFormData, getSource}) =>
                  scopedFormData.title ? <TextInput multiline label="Titel" source={getSource('title')}/> : null
                }
              </FormDataConsumer>
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default ChapterEdit;