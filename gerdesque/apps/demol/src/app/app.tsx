import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from '@gerdesque/home';
import { Admin, Resource } from 'react-admin';
import { ChapterList, ChapterEdit, ChapterCreate } from './admin/chapter';
import jsonServerProvider from 'ra-data-json-server';
import './app.scss';

const dataProvider = jsonServerProvider('http://localhost:3000');
export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="app-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <div className="app-content">
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
