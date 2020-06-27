import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import './redirect.scss';

/* eslint-disable-next-line */
export interface RedirectProps {
  value: string
  layer: string
}

export const RedirectComponent = (props: RedirectProps) => {
  const [redirect, setRedirect] = useState(false);
  return (
    <>
      <button type='button' className='link-button redirect' onClick={() => setRedirect(true)}>{props.value}</button>
      {redirect && <Redirect exact to={props.layer} />}
    </>
  );
};

export default RedirectComponent;
