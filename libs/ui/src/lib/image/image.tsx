import React, {useContext, useState} from 'react';
import { IMAGE_SUFFIX, IMAGE_SUFFIX_ALTERNATE } from '@gerdesque/data';
import {AppContext } from '../chapter/context';
import './image.scss';

/* eslint-disable-next-line */
export interface ImageProps {
  value: string
  layer?: string
  title?: string
}

export const Image = (props: ImageProps) => {
  const [character, setCharacter] = useContext(AppContext);
  const [hover, setHover] = useState(false);
  //const [source, setSource] = useState(props.value);

  const chooseCharacter = () => {
    props.title && setCharacter(props.title);
  }

  return (
    <picture className={`chapter_picture ${props.layer} ${props.title && hover ? 'highlighted' : ''}`} onMouseOut={() => setHover(false)} onMouseOver={() => setHover(true)} onClick={() => chooseCharacter()}>
      <source srcSet={"./assets/"+props.value+IMAGE_SUFFIX} type='image/webp' />
      <source srcSet={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} type='image/png' />
      <img draggable="false" src={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} alt={props.value} />
    </picture>
  )

};

export default Image;
