import React, { useEffect, useState } from 'react';

import './chapter.scss';

/* eslint-disable-next-line */
export interface ChapterProps {
  class: string
  children: Array<any>
}

export const Chapter = (props: ChapterProps) => {
  
  return (
    <div className={`parallax ${props.class}`}>
        {props.children[0] && (
          <div id='header' className='parallax__group'>
            <div className='parallax__layer parallax__layer--base'>{props.children[0]}</div>
          </div>
        )}
        {props.children[1] && (
          <div id='group2' className='parallax__group'>
            <div className='parallax__layer parallax__layer--base'>{props.children[1]}</div>
            <div className='parallax__layer parallax__layer--deep'></div>
          </div>
        )}
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
        )}
      </div>
  );
};
