import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '@gerdesque/home';
import { Adminui } from '@gerdesque/adminui';
import { Nav } from '@gerdesque/ui';

import './app.scss';

export const App = () => {
  return (
    <BrowserRouter basename="/demokratieerleben2020">
      <div className="app">
        <Nav path="/" />
        <div className="app-content">
          <Route path="/" exact component={Home} />
          <Route path="/adminui" exact component={Adminui} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
