import React from 'react';

import './video.scss';

/* eslint-disable-next-line */
export interface VideoProps {
  value: string
}

export const Video = (props: VideoProps) => {
  return (
    <div>
      <h1>Welcome to video component!</h1>
    </div>
  );
};

export default Video;
