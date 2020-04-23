import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ChapterList, ChapterEdit, ChapterCreate } from './chapter';
import jsonServerProvider from 'ra-data-json-server';

import './adminui.scss';

const dataProvider = jsonServerProvider('http://localhost:3000');

/* eslint-disable-next-line */
export interface AdminuiProps {}

export const Adminui = (props: AdminuiProps) => {
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

export default Adminui;
