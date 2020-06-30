import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import './text.scss';

export interface TextProps {
  value: string
  option?: string
}

export const Text = (props: TextProps) => {
  const isRevealing = props.option === 'reveal';
  if (isRevealing) {
    return (
      <div className='box'>
        <Reveal effect="reveal" duration={100}>
          <p>
            {props.value.split("").map(function(char, index){
              return <span aria-hidden="true" key={index} style={{animationDelay: (0.1 + index / 10) + "s"}}>{char}</span>;
            })}
          </p> 
        </Reveal>
      </div>
    );
  }
  return (
    <div className={`box ${props.option}`}>
      <Fade bottom duration={5000}>
        {props.option === 'link' ? <p className="link" dangerouslySetInnerHTML={{__html: props.value}} /> : <p>{props.value}</p>}
      </Fade>
    </div>
  );
};

export default Text;
