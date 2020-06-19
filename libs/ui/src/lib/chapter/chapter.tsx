import React, { Fragment, useContext} from 'react';

import Header from '../header/header';
import Group from '../group/group';
import {AppContext } from '../chapter/context';

import { ChapterProps } from '@gerdesque/data';

import './chapter.scss';

export const Chapter = (props: ChapterProps) => {

  const [character, setCharacter] = useContext(AppContext);

  const renderChapterGroups = () => {
    return props.groups.map((group, index) =>
    <Fragment key={index}>
      {(!group.character || group.character === character) && 
        <section key={index} style={{ zIndex: props.groups.length - index }}
          className={`parallax__group ${group.background ? 'back' : ''}`}>
        <Group {...group} />
      </section>}
    </Fragment>
    )
  }

  return (
    <div className='parallax'>
      <Header {...props}/>
      {props.groups && renderChapterGroups()}
    </div>
  );
};
export default Chapter;
