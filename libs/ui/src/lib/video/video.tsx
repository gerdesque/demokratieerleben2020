import React, {useContext, useState} from 'react';
import { SUBTITLE_SUFFIX, VIDEO_SUFFIX } from '@gerdesque/data';
import { AppContext } from '../chapter/context';

/* eslint-disable-next-line */
export interface VideoProps {
  value: string
  title?: string
  option?: string
}

export const Video = (props: VideoProps) => {
  const [,,language] = useContext(AppContext);
  const [isPlaying, setPlaying] = useState(false);

  const playVideo = (playing) => {
    setPlaying(playing);
  };

  return (
    <div className={`chapter_video ${props.option}` }>
      <p>{props.title}</p>
      <video controls onPlaying={() => playVideo(true)} onPause={() => playVideo(false)}>
        <source type='video/mp4' src={"./assets/movies/"+props.value+VIDEO_SUFFIX}></source>
        {language === 'en' && <track kind="subtitles" label="English" srcLang="en" src={"./assets/movies/"+props.value+SUBTITLE_SUFFIX} default/>}
        Your browser does not support the video tag.
      </video>
    </div>);
};

export default Video;
