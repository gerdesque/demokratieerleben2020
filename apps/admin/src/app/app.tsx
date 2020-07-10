import React from 'react';
import { Admin as ReactAdmin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import germanMessages from 'ra-language-german';

import chapters from './chapters';

import jsonServerProvider from 'ra-data-json-server';
import { API_URL } from '@gerdesque/data';

import './app.scss';

const i18nProvider = polyglotI18nProvider(() => germanMessages, 'de');

const dataProvider = jsonServerProvider(API_URL);

export const Admin = () => {
  return (
    <ReactAdmin 
      title="Demokratie erLeben Admin"
      i18nProvider={i18nProvider}
      dataProvider={dataProvider}>
      <Resource name="chapters" {...chapters} />
    </ReactAdmin>
  );
};

export default Admin;
