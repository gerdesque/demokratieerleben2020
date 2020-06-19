import React, { Fragment, useContext } from 'react';

import Header from '../header/header';
import Video from '../video/video';
import Image from '../image/image';
import Text from '../text/text';
import Decission from '../decission/decission';
import Smokingpit from '../smokingpit/smokingpit';
import Puzzle from '../puzzle/puzzle';
import Redirect from '../redirect/redirect';
import Info from '../info/info';
import {AppContext } from '../chapter/context';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Chapter, ContentType } from '@gerdesque/data';

import './chapter.scss';

export const ChapterComponent = (props: Chapter) => {

  const [character, setCharacter] = useContext(AppContext);

  const renderChapterGroups = () => {
    return props.groups.map((group, index) => 
      <Fragment key={index}>
        {(!group.character || group.character === character) && <div key={index} style={{ zIndex: props.groups.length - index }} className={`parallax__group ${group.background ? 'back' : ''}`}>
          {group.background && <div className={`parallax__layer parallax__layer--back`}>
            <Image value={group.background} width={'bg'}/>
          </div>}
          {group.content && renderChapterContent(group)}
        </div>}
      </Fragment>
    )
  }

  const renderChapterContent = ({content : contentList, grouped, row, info = null}) => {

    const chapterGroupedContent = 
      <div className={`parallax__layer parallax__layer--base grouped ${row ? 'row' : 'column'}`}>
        {info && <Info value={info} />}
        {contentList.map((content, index) =>
          renderContent(content, index)
        )}
      </div>;

    const chapterContent = 
      contentList.map((content, index) =>
        <div key={index} className={`parallax__layer parallax__layer--${content.layer}`}>
          {info && content.layer === 'fore' && <Info value={info} />}
          {renderContent(content, index)}
        </div>);

    return grouped ? chapterGroupedContent : chapterContent
  }

  const renderContent = (content, index) => {
    return <Fragment key={index}>
      {content.type === ContentType.Text && <Text value={content.value} />}
      {content.type === ContentType.Redirect && <Redirect value={content.value} />}
      {content.type === ContentType.Video && <Video value={content.value} width={content.layer} title={content.title} />}
      {content.type === ContentType.Image && <Image value={content.value} width={content.layer} title={content.title}/>}
      {content.type === ContentType.Decission && <Decission value={content.value} />}
      {content.type === ContentType.SmokingPit && <Smokingpit value={content.value} />}
      {content.type === ContentType.Puzzle && <Puzzle/>}
    </Fragment>
  }

  return (
    <div className='parallax'>
      <Header link={props.link} name={props.name}/>
      {props.groups && renderChapterGroups()}
    </div>
  );
};
export default ChapterComponent;
