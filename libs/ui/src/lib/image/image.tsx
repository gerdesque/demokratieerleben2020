import React, {useContext} from 'react';
import { IMAGE_SUFFIX, IMAGE_SUFFIX_ALTERNATE } from '@gerdesque/data';
import {AppContext } from '../chapter/context';
import './image.scss';

export interface ImageProps {
  value: string
  title?: string
  option?: string
}

export const Image = (props: ImageProps) => {
  const [character, setCharacter] = useContext(AppContext);

  const chooseCharacter = () => {
    props.title && setCharacter(props.title);
  }

  return (
    <picture className={`chapter_picture ${props.option}`} onClick={() => chooseCharacter()}>
      <source srcSet={"./assets/"+props.value+IMAGE_SUFFIX} type='image/webp' />
      <source srcSet={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} type='image/png' />
      <img draggable="false" loading="lazy" src={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} alt={props.title || props.value} />
      {props.title && <div className="overlay">{props.title}</div>}
    </picture>
  )

};

export default Image;
