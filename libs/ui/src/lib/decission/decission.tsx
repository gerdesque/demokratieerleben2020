import React from 'react';

import './decission.scss';

/* eslint-disable-next-line */
export interface DecissionProps {
  value: string
}

export const Decission = (props: DecissionProps) => {
  return (
    <div className='box'><p>{props.value}</p>!</div>
  );
};

export default Decission;
