import React, {useState} from 'react';
import { VIDEO_SUFFIX } from '@gerdesque/data';

import './video.scss';

/* eslint-disable-next-line */
export interface VideoProps {
  value: string,
  layer: string
  title: string
}

export const Video = (props: VideoProps) => {
  
  const [isPlaying, setPlaying] = useState(false);

  const playVideo = (playing) => {
    setPlaying(playing);
  };

  return (
    <div className={`chapter_video ${props.layer} ${isPlaying ? 'theater' : ''}` }>
      <p>{props.title}</p>
      <video controls onPlaying={() => playVideo(true)} onPause={() => playVideo(false)}>
        <source type='video/mp4' src={"./assets/movies/"+props.value+VIDEO_SUFFIX}></source>
        Your browser does not support the video tag.
      </video>
    </div>);
};

export default Video;
