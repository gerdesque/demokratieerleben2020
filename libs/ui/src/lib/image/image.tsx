import React from 'react';
import { API_URL, IMAGE_SUFFIX, IMAGE_SUFFIX_ALTERNATE } from '@gerdesque/data';
import './image.scss';

/* eslint-disable-next-line */
export interface ImageProps {
  value: string
}

export const Image = (props: ImageProps) => {
  return (
    <picture>
      <source srcSet={API_URL+"/"+props.value+IMAGE_SUFFIX} type='image/webp' />
      <source srcSet={API_URL+"/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} type='image/png' />
      <img draggable="false" src={API_URL+"/fallback/"+props.value+IMAGE_SUFFIX_ALTERNATE} alt={props.value} />
    </picture>
  )
};

export default Image;
