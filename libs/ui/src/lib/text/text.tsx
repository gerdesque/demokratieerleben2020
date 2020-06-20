import React from 'react';
import Fade from 'react-reveal/Fade';
import './text.scss';

export interface TextProps {
  value: string
}

export const Text = (props: TextProps) => {
  return (
    <div className='box'>
      <Fade bottom duration={5000}>
        <p>{props.value}</p>
      </Fade>
    </div>
  );
};

export default Text;
