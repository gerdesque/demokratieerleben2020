import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import './redirect.scss';

/* eslint-disable-next-line */
export interface RedirectProps {
  type: string
  value: string
  layer?: string
  title?: string
  option?: string
}

export const RedirectComponent = (props: RedirectProps) => {
  const [redirect, setRedirect] = useState(false);
  return (
    <>
      <button type='button' className={`link-button redirect ${props.option}`} onClick={() => setRedirect(true)}>{props.title}</button>
      {redirect && <Redirect exact to={props.value} />}
    </>
  );
};

export default RedirectComponent;
