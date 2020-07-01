import React, { Fragment, useContext} from 'react';
import { InView } from 'react-intersection-observer'
import Sound from 'react-sound';

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
      <InView threshold={0.5}>
        {({ inView, ref, entry }) => (
          <section ref={ref} key={index} className={`parallax__group ${group.background ? 'back' : ''} ${inView ? 'active' : ''}`}>
            <Group {...group} />
          </section>
        )}
      </InView>}
    </Fragment>
    )
  }

  return (
    <InView as="div">
      <Sound
        url={props.link === 'personen' ? `./assets/sounds/${props.link}_${character}.mp3` : `./assets/sounds/${props.link}.mp3`}
        loop={true}
        playStatus={Sound.status.PLAYING}
      />
      <div className='parallax'>
        <Header {...props}/>
        {props.groups && renderChapterGroups()}
      </div>
    </InView>
  );
};
export default Chapter;
