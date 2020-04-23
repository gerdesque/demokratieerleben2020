import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from '@gerdesque/home';
import { Adminui } from '@gerdesque/adminui';
import { ChapterLink } from '@gerdesque/ui';

import './app.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="app-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adminui">Admin UI</Link>
            </li>
            <ChapterLink />
          </ul>
        </nav>
        <div className="app-content">
          <Route path="/" exact component={Home} />
          <Route path="/adminui" exact component={Adminui} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
