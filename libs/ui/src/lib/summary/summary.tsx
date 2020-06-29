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
    <details>
      <summary>{props.value}</summary>
      <p>{props.title}</p>
    </details>
  );
};

export default Summary;
