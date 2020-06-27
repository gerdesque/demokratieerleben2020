import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollIntoView from "./scrollintoview";
import usePersistedState from './usepersistedstate';
import { Home } from '@gerdesque/home';
import { Nav, Chapter, AppContext } from '@gerdesque/ui';  
import { ChapterProps } from '@gerdesque/data';
import './app.scss';

import app from './app.json';

export const App = () => {
  const [character, setCharacter] = usePersistedState('character', 'default');

  const renderChapter = (routerProps) => {
    const chapterLink = routerProps.match.params.link
    const chapter: ChapterProps = app.chapters.find(chapterObj => chapterObj.link === chapterLink)
    return (chapter && <Chapter {...chapter} />)
  }

  return (
    <AppContext.Provider value={[character, setCharacter]}>
    <BrowserRouter basename="/demokratieerleben2020"> 
      <div className="app">
        <Nav chapters = {app.chapters}/>
        <ScrollIntoView>
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chapter/:link" render={renderChapter} />
          </Switch>
        </div>
        </ScrollIntoView>
      </div>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
