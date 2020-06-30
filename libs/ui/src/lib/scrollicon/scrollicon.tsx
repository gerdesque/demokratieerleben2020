import React from 'react';

import './scrollicon.scss';

/* eslint-disable-next-line */
export interface ScrolliconProps {}

export const Scrollicon = (props: ScrolliconProps) => {
  return (
    <div className='icon-scroll' onClick={() => document.querySelector('.icon-scroll').scrollIntoView({ behavior: "smooth" })}></div>
  );
};

export default Scrollicon;
