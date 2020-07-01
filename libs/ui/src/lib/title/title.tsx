import React from 'react';



/* eslint-disable-next-line */
export interface TitleProps {
  text: string
}

export const Title = (props: TitleProps) => {
  return (
    <div className="title"><h1>{props.text}</h1></div>
  );
};

export default Title;
