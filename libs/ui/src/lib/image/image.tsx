import React from 'react';
import { IMAGE_SUFFIX, IMAGE_SUFFIX_ALTERNATE } from '@gerdesque/data';
import './image.scss';

/* eslint-disable-next-line */
export interface ImageProps {
  value: string
  width?: string
}

export const Image = (props: ImageProps) => {
  return (
    <picture className={`chapter_picture ${props.width}`}>
      <source srcSet={"./assets/"+props.value+IMAGE_SUFFIX} type='image/webp' />
      <source srcSet={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} type='image/png' />
      <img draggable="false" src={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} alt={props.value} />
    </picture>
  )

  // <button type='button' className='link-button' key={avatar} onMouseOut={() => this.setState({ isHover: false })} onMouseOver={() => this.setState({ isHover: avatar })} onClick={() => this.setState({ avatar: avatar })}>{avatar}</button>)}

};

export default Image;
