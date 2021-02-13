import React, { Fragment } from 'react';

import Video from '../video/video';
import Image from '../image/image';
import Text from '../text/text';
import Smokingpit from '../smokingpit/smokingpit';
import Puzzle from '../puzzle/puzzle';
import Memory from '../memory/memory';
import Suitcase from '../suitcase/suitcase';
import TicTacToe from '../tictactoe/tictactoe';
import Daily from '../daily/daily';
import Redirect from '../redirect/redirect';
import Info from '../info/info';
import Summary from '../summary/summary';

import { GroupProps } from '@gerdesque/data';



const ContentType  = {
  text: Text,
  redirect: Redirect,
  video: Video,
  image: Image,
  smokingpit: Smokingpit,
  puzzle: Puzzle,
  memory: Memory,
  suitcase: Suitcase,
  summary: Summary,
  tictactoe: TicTacToe,
  daily: Daily
}

export const Group = ({
  grouped,
  info,
  background,
  content: contentList}: GroupProps) => {

  const renderBackground = () => {
    return <div className={`parallax__layer parallax__layer--back`}>
      <Image value={background} option={'bg'}/>
    </div>
  }

  const renderGroupContent = () => {

    const chapterGroupedContent = 
    <div className={`parallax__layer parallax__layer--base grouped`}>
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
      {React.createElement(ContentType[content.type], {...content})}
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
