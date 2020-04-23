import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from '@gerdesque/home';
import { Adminui } from '@gerdesque/adminui';

import './app.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="app-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/adminui">Admin UI</Link>
            </li>
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
