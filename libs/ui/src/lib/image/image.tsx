import React from 'react';
import { IMAGE_SUFFIX, IMAGE_SUFFIX_ALTERNATE } from '@gerdesque/data';
import './image.scss';

/* eslint-disable-next-line */
export interface ImageProps {
  value: string
}

export const Image = (props: ImageProps) => {
  return (
    <picture className="chapter_picture">
      <source srcSet={"./assets/"+props.value+IMAGE_SUFFIX} type='image/webp' />
      <source srcSet={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} type='image/png' />
      <img draggable="false" src={"./assets/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} alt={props.value} />
    </picture>
  )
};

export default Image;
