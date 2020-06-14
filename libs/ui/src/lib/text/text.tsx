import React from 'react';
import Fade from 'react-reveal/Fade';
import './text.scss';

/* eslint-disable-next-line */
export interface TextProps {
  value: string
}

export const Text = (props: TextProps) => {
  return (
    <div className='box'>
      <Fade bottom>
        <p>{props.value}</p>
      </Fade>
    </div>
  );
};

export default Text;
