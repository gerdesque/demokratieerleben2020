import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollIntoView from "./scrollintoview";
import usePersistedState from './usepersistedstate';
import { Home } from '@gerdesque/home';
import { Nav, Chapter, AppContext } from '@gerdesque/ui';  
import { ChapterProps } from '@gerdesque/data';
import './app.scss';

import appDe from './app.json';
import appEn from './app_en.json';
import { API_URL } from '@gerdesque/data';

(window as any).soundManager.setup({debugMode: false});

export const App = () => {
  const [character, setCharacter] = usePersistedState('character', 'default');
  const [language, setLanguage] = usePersistedState('language', 'de');
  const [chapters, setChapters] = useState(language === 'de' ? appDe.chapters : appEn.chapters);

  useEffect(() => {
    fetch(`${API_URL}/chapters`)
      .then(_ => _.json())
      .then(setChapters);
  }, []);

  const renderChapter = (routerProps) => {
    const chapterLink = routerProps.match.params.link
    const chapter: ChapterProps = chapters.find(chapterObj => chapterObj.link === chapterLink)
    return (chapter && <Chapter {...chapter} />)
  }

  return (
    <AppContext.Provider value={[character, setCharacter, language, setLanguage]}>
    <BrowserRouter basename="/demokratieerleben2020"> 
      <div className="app">
        <Nav chapters = {chapters}/>
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
