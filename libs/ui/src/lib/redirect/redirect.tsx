import React from 'react';

import './redirect.scss';

/* eslint-disable-next-line */
export interface RedirectProps {
  value: string
}

export const Redirect = (props: RedirectProps) => {
  return (
    <button type='button' className='link-button redirect'>{props.value}</button>
  );
};

export default Redirect;
