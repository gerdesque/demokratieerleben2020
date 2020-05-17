import React from 'react';

import './text.scss';

/* eslint-disable-next-line */
export interface TextProps {
  value: string
}

export const Text = (props: TextProps) => {
  return (
    <div className='box'><p>{props.value}</p></div>
  );
};

export default Text;
