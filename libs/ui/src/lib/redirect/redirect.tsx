import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";


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
  const history = useHistory();

  const handleRedirect = () => {
    props.avatar && setCharacter(props.avatar);
    history.push(props.value);
  }

  return (
    <p className={`redirect ${props.option}`} onClick={() => handleRedirect()}>{props.title}</p>
  );
};

export default RedirectComponent;
