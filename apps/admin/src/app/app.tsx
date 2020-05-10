import React from 'react';
import { Admin as ReactAdmin, Resource } from 'react-admin';

import chapters from './chapters';
import images from './images';

import jsonServerProvider from 'ra-data-json-server';
import { API_URL } from '@gerdesque/data';

import './app.scss';

const dataProvider = jsonServerProvider(API_URL);

export const Admin = () => {
  return (
    <ReactAdmin 
      title="Demokratie erLeben Admin"
      dataProvider={dataProvider}>
      <Resource name="chapters" {...chapters} />
      <Resource name="images" {...images} />
    </ReactAdmin>
  );
};

export default Admin;
