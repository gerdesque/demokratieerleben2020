import React from 'react';
import Title from '../title/title';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Chapter, ContentType } from '@gerdesque/data';

import './chapter.scss';

export const ChapterComponent = (props: Chapter) => {
  
  const renderText = (value) => {
    return <div className='box'><p>{value}</p></div>
  }

  const renderVideo = (value) => {
    return <div className='box'><p>{value}</p></div>
  }

  const renderImage = (value) => {
    return <div className='box'><p>{value}</p></div>
  }

  const renderChapterContent = () => {
    return props.content.map((content) => 
      <div className='parallax__group'>
        <div className='parallax__layer parallax__layer--base'>
          {content.type === ContentType.Text && renderText(content.value)}
          {content.type === ContentType.Video && renderVideo(content.value)}
          {content.type === ContentType.Image && renderImage(content.value)}
        </div>
      </div>)
  }

  return (
    <div className={`parallax ${props.name}`}>
      <div id='header' className='parallax__group'>
        <div className='parallax__layer parallax__layer--base'>
        <Title text={props.name} />
        </div>
      </div>
      {renderChapterContent()}
        {/* <div id='group2' className='parallax__group'>
          <div className='parallax__layer parallax__layer--base'></div>
          <div className='parallax__layer parallax__layer--deep'></div>
        </div>
        {props.children[2] && (
          <div id='group3' className='parallax__group'>
            <div className='parallax__layer parallax__layer--base'>{props.children[2]}</div>
            <div className='parallax__layer parallax__layer--back'></div>
          </div>
        )}
        {props.children[3] && (
          <div id='group4' className='parallax__group'>
            <div className='parallax__layer parallax__layer--fore'>{props.children[3]}</div>
          </div>
        )}
        {props.children[4] && (
          <div id='group5' className='parallax__group'>
            <div className='parallax__layer parallax__layer--fore'>{props.children[4]}</div>
            <div className='parallax__layer parallax__layer--base'></div>
          </div>
        )}
        {props.children[5] && (
          <div id='group6' className='parallax__group'>
            <div className='parallax__layer parallax__layer--back'></div>
            <div className='parallax__layer parallax__layer--base'></div>
            <div className='parallax__layer parallax__layer--fore'>{props.children[5]}</div>
          </div>
        )}
        {props.children[6] && (
          <div id='group7' className='parallax__group'>
            <div className='parallax__layer parallax__layer--fore'>{props.children[6]}</div>
            <div className='parallax__layer parallax__layer--back'></div>
          </div>
        )} */}
      </div>
  );
};
