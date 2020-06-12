import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '@gerdesque/home';
import { Nav, ChapterComponent } from '@gerdesque/ui';  

import './app.scss';

import app from './app.json';

export const App = () => {

  const renderChapter = (routerProps) => {
    const chapterId = parseInt(routerProps.match.params.id)
    const chapter = app.chapters.find(chapterObj => chapterObj.id === chapterId)
    return (chapter && <ChapterComponent {...chapter} />)
  }

  return (
    <BrowserRouter basename="/demokratieerleben2020">
      <div className="app">
        <Nav chapters = {app.chapters}/>
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chapter/:id" render={renderChapter} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
