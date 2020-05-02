import React from 'react';

import './title.scss';

/* eslint-disable-next-line */
export interface TitleProps {
  text: any
}

export const Title = (props: TitleProps) => {
  return (
    <div className="title"><h1>{props.text}</h1></div>
  );
};

export default Title;
