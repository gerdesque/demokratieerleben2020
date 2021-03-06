import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollIntoView from "./scrollintoview";
import usePersistedState from './usepersistedstate';
import { Home } from '@gerdesque/home';
import { Nav, Chapter, AppContext } from '@gerdesque/ui';  
import { ChapterProps } from '@gerdesque/data';
import './app.scss';

import app from './app.json';
import { API_URL } from '@gerdesque/data';

(window as any).soundManager.setup({debugMode: false});

export const App = () => {
  const [character, setCharacter] = usePersistedState('character', 'default');
  const [language, setLanguage] = useState('de');
  const [chapters, setChapters] = useState(app.chapters);
  const [title, setTitle] = useState('Demokratie erleben');

  useEffect(() => {
    setTitle(language === 'de' ? 'Demokratie erleben' : 'Living Democracy');
    document.title = title;
    if (language === 'de') {
    fetch(`${API_URL}/kapitel`)
      .then(_ => _.json())
      .then(setChapters)
      .catch(_ => setChapters(app.kapitel));
    } else {
      fetch(`${API_URL}/chapters`)
      .then(_ => _.json())
      .then(setChapters)
      .catch(_ => setChapters(app.chapters));
    }
  }, [language, title]);

  const renderChapter = (routerProps) => {
    const chapterLink = routerProps.match.params.link
    const chapter: ChapterProps = chapters.find(chapterObj => chapterObj.link === chapterLink)
    return (chapter && <Chapter {...chapter} />)
  }

  return (
    <AppContext.Provider value={[character, setCharacter, language, setLanguage]}>
    <BrowserRouter basename="/demokratieerleben2020"> 
      <div className="app">
        <Nav chapters = {chapters} title={title}/>
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
