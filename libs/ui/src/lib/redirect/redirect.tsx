import React, {useState,useContext} from 'react';
import { Redirect } from "react-router-dom";

import {AppContext } from '../chapter/context';

import './redirect.scss';

/* eslint-disable-next-line */
export interface RedirectProps {
  type: string
  value: string
  layer?: string
  title?: string
  option?: string
  avatar?: string
}

export const RedirectComponent = (props: RedirectProps) => {
  const [character, setCharacter] = useContext(AppContext);
  const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
    props.avatar && setCharacter(props.avatar);
    setRedirect(true)
  }

  return (
    <>
      {/* <button type='button' className={`link-button redirect ${props.option}`} onClick={() => handleRedirect()}>{props.title}</button> */}
      <p className={`redirect ${props.option}`} onClick={() => handleRedirect()}>{props.title}</p>
      {redirect && <Redirect exact to={props.value} />}
    </>
  );
};

export default RedirectComponent;
