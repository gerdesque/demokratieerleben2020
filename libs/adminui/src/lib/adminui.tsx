import React from 'react';
import { createBrowserHistory as createHistory } from 'history';
import { Admin, Resource } from 'react-admin';
import { ChapterList, ChapterEdit, ChapterCreate } from './chapter';
import jsonServerProvider from 'ra-data-json-server';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { API_URL } from '@gerdesque/data';

import './adminui.scss';

const history = createHistory();
const dataProvider = jsonServerProvider(API_URL);

/* eslint-disable-next-line */
export interface AdminuiProps {}

export const Adminui = (props: AdminuiProps) => {
  return (
    <Admin dataProvider={dataProvider} history={history}>
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
