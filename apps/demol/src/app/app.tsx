import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '@gerdesque/home';
import { Adminui } from '@gerdesque/adminui';
import { Nav, Chapter, Title } from '@gerdesque/ui';

import './app.scss';

export const App = () => {

  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/chapter')
      .then(_ => _.json())
      .then(setChapters);
  }, []);

  const renderChapter = (routerProps) => {
    const chapterId = parseInt(routerProps.match.params.id)
    const chapter = chapters.find(chapterObj => chapterObj.id === chapterId)
    return (chapter && 
      <Chapter class={chapter.name}>
        <Title text={chapter.name} />
        <div className='box'>
          <p>{chapter.path}</p>
        </div>
      </Chapter>)
  }

  return (
    <BrowserRouter basename="/demokratieerleben2020">
      <div className="app">
        <Nav chapters = {chapters}/>
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/adminui" exact component={Adminui} />
            <Route path="/chapter/:id" render={renderChapter} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
