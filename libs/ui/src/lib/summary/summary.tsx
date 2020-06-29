import React from 'react';

import './summary.scss';

/* eslint-disable-next-line */
export interface SummaryProps {
  value: string
  title?: string
  option?: string
}

export const Summary = (props: SummaryProps) => {
  return (
    <details className="summary">
      <summary>{props.value}</summary>
      {props.title.split(/\n/g).map((text, index) =>
          <p key={index}>{text}</p>
        )}
      
    </details>
  );
};

export default Summary;
