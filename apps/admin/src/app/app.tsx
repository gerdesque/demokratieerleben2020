import React from 'react';
import { Admin as ReactAdmin, Resource } from 'react-admin';
import { ChapterList, ChapterEdit, ChapterCreate } from './chapter';
import jsonServerProvider from 'ra-data-json-server';
import { API_URL } from '@gerdesque/data';

import './app.scss';

const dataProvider = jsonServerProvider(API_URL);

export const Admin = () => {
  return (
    <ReactAdmin dataProvider={dataProvider}>
      <Resource
        name="chapter"
        options={{ label: 'Kapitel' }}
        list={ChapterList}
        edit={ChapterEdit}
        create={ChapterCreate}
      />
    </ReactAdmin>
  );
};

export default Admin;
