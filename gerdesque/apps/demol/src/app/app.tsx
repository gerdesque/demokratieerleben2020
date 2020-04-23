import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './app.scss';

const dataProvider = jsonServerProvider('http://localhost:3000');
export const App = () => {
  return <Admin dataProvider={dataProvider} />;
};

export default App;
