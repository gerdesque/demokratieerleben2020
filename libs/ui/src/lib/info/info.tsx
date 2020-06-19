import React from 'react';
import Fade from 'react-reveal/Fade';
import './info.scss';

/* eslint-disable-next-line */
export interface InfoProps {
  value: string
}

export const Info = (props: InfoProps) => {

  return (
    <Fade left delay={2000}>
      <div className="infoLink">
        <div className="infoText">
          <p dangerouslySetInnerHTML={{__html: props.value}} />
        </div>
      </div>
    </Fade>
  );
};

export default Info;
