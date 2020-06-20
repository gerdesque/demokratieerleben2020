import React, { Fragment } from 'react';

import Video from '../video/video';
import Image from '../image/image';
import Text from '../text/text';
import Decission from '../decission/decission';
import Smokingpit from '../smokingpit/smokingpit';
import Puzzle from '../puzzle/puzzle';
import Suitcase from '../suitcase/suitcase';
import Redirect from '../redirect/redirect';
import Info from '../info/info';

import { GroupProps, ContentType } from '@gerdesque/data';

import './group.scss';

export const Group = ({
  grouped,
  row,
  info,
  background,
  content: contentList}: GroupProps) => {

  const renderBackground = () => {
    return <div className={`parallax__layer parallax__layer--back`}>
      <Image value={background} layer={'bg'}/>
    </div>
  }

  const renderGroupContent = () => {

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
      {content.type === ContentType.Text && <Text {...content} />}
      {content.type === ContentType.Redirect && <Redirect {...content} />}
      {content.type === ContentType.Video && <Video {...content} />}
      {content.type === ContentType.Image && <Image {...content}/>}
      {content.type === ContentType.Decission && <Decission {...content} />}
      {content.type === ContentType.SmokingPit && <Smokingpit {...content} />}
      {content.type === ContentType.Puzzle && <Puzzle/>}
      {content.type === ContentType.Suitcase && <Suitcase/>}
    </Fragment>
  }

  return (
    <>
      {background && renderBackground()}
      {contentList && renderGroupContent()}
    </>
  );
};

export default Group;
