import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '@gerdesque/home';
import { Nav, ChapterComponent } from '@gerdesque/ui';  
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { API_URL } from '@gerdesque/data';

import './app.scss';

export const App = () => {
  
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/chapters`)
      .then(_ => _.json())
      .then(setChapters);
  }, []);

  const renderChapter = (routerProps) => {
    const chapterId = parseInt(routerProps.match.params.id)
    const chapter = chapters.find(chapterObj => chapterObj.id === chapterId)
    return (chapter && <ChapterComponent {...chapter} />)
  }

  return (
    <BrowserRouter basename="/demokratieerleben2020">
      <div className="app">
        <Nav chapters = {chapters}/>
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
