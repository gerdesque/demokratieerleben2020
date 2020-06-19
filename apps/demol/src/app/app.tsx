import React , {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '@gerdesque/home';
import { Nav, Chapter, AppContext } from '@gerdesque/ui';  
import { ChapterProps } from '@gerdesque/data';
import './app.scss';

import app from './app.json';


export const App = () => {
  const [character, setCharacter] = useState('default');

  const renderChapter = (routerProps) => {
    const chapterId = parseInt(routerProps.match.params.id)
    const chapter: ChapterProps = app.chapters.find(chapterObj => chapterObj.id === chapterId)
    return (chapter && <Chapter {...chapter} />)
  }

  return (
    <AppContext.Provider value={[character, setCharacter]}>
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
    </AppContext.Provider>
  );
};

export default App;
