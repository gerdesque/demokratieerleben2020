import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ChapterList, ChapterEdit, ChapterCreate } from './admin/chapter';
import jsonServerProvider from 'ra-data-json-server';
import './app.scss';

const dataProvider = jsonServerProvider('http://localhost:3000');
export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="chapter"
        options={{ label: 'Kapitel' }}
        list={ChapterList}
        edit={ChapterEdit}
        create={ChapterCreate}
      />
    </Admin>
  );
};

export default App;
