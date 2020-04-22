import React from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Demokratie erleben</h1>
      </header>
      <main></main>
    </div>
  );
};

export default App;
