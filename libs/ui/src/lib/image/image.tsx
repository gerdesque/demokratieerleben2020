import React, {useContext} from 'react';
import { IMAGE_SUFFIX, IMAGE_SUFFIX_ALTERNATE } from '@gerdesque/data';
import {AppContext } from '../chapter/context';
import './image.scss';

/* eslint-disable-next-line */
export interface ImageProps {
  value: string
  width?: string
  title?: string
}

export const Image = (props: ImageProps) => {
  const [character, setCharacter] = useContext(AppContext);

  const chooseCharacter = () => {
    setCharacter(props.title)
  }

  return (
    <picture className={`chapter_picture ${props.width}`} onClick={() => chooseCharacter()}>
      <source srcSet={"./assets/"+props.value+IMAGE_SUFFIX} type='image/webp' />
      <source srcSet={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} type='image/png' />
      <img draggable="false" src={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} alt={props.value} />
    </picture>
  )

  // <button type='button' className='link-button' key={avatar} onMouseOut={() => this.setState({ isHover: false })} onMouseOver={() => this.setState({ isHover: avatar })} onClick={() => this.setState({ avatar: avatar })}>{avatar}</button>)}

};

export default Image;
