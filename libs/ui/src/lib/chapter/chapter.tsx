import React, { Fragment, useContext } from 'react';
import Title from '../title/title';
import Video from '../video/video';
import Image from '../image/image';
import Text from '../text/text';
import Decission from '../decission/decission';
import Smokingpit from '../smokingpit/smokingpit';
import Puzzle from '../puzzle/puzzle';
import Scrollicon from '../scrollicon/scrollicon';
import Redirect from '../redirect/redirect';
import {AppContext } from '../chapter/context';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Chapter, ContentType } from '@gerdesque/data';
import { IMAGE_SUFFIX } from '@gerdesque/data';

import './chapter.scss';

export const ChapterComponent = (props: Chapter) => {

  const [character, setCharacter] = useContext(AppContext);

  const useStyles = makeStyles(() => ({
    chapter: {
      backgroundImage: `url(${"./assets/"+ props.link+IMAGE_SUFFIX})`,
      boxShadow: '0 0 8px 8px #dcd5cc inset',
      flexDirection: 'column',
      },
  }));
  const classes = useStyles();

  const [volume, setVolume] = React.useState(false);

  const audio = new Audio(`./assets/sounds/${props.link}.mp3`)
  const startAudio = () => {
    setVolume(!volume);
    volume ? audio.pause() : audio.play();
  }

  const renderChapterGroups = () => {
    return props.groups.map((group, index) => 
      <Fragment key={index}>
        {(!group.character || group.character === character) && <div key={index} className={`parallax__group ${group.background ? 'back' : ''}`}>
          {group.background && <div className={`parallax__layer parallax__layer--back`}>
            <Image value={group.background} width={'bg'}/>
          </div>}
          {group.content && renderChapterContent(group)}
        </div>}
      </Fragment>
    )
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

  const renderChapterContent = ({content : contentList, grouped, row}) => {

    const chapterGroupedContent = 
      <div className={`parallax__layer parallax__layer--base grouped ${row ? 'row' : 'column'}`}>
        {contentList.map((content, index) =>
          renderContent(content, index)
        )}
      </div>;

    const chapterContent = 
      contentList.map((content, index) =>
        <div key={index} className={`parallax__layer parallax__layer--${content.layer}`}>
          {renderContent(content, index)}
        </div>);

    return grouped ? chapterGroupedContent : chapterContent
  }

  return (
    <div className='parallax'>
      <div className='parallax__group parallax__header'>
        <div className={`parallax__layer parallax__layer--base fade-in-scale ${classes.chapter}`}>
          <Title text={props.name} />
          <Chip onClick={() => startAudio()} label={volume ? "Ton aus" : "Ton an"} />
          <Scrollicon/>
        </div>
      </div>
      {props.groups && renderChapterGroups()}
      </div>
  );
};
export default ChapterComponent;
