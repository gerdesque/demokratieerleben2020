import React from 'react';
import { VIDEO_SUFFIX } from '@gerdesque/data';

import './video.scss';

/* eslint-disable-next-line */
export interface VideoProps {
  value: string,
  width: string
  title: string
}

export const Video = (props: VideoProps) => {
  // const playVideo = () => {
  //   this.setState({ hasVideoStarted: true });
  //   this.refs.video.play();
  // };

  return (
    <div className={`chapter_video ${props.width}`}>
      <p>{props.title}</p>
      <video>
        <source type='video/mp4' src={"./assets/movies/"+props.value+VIDEO_SUFFIX}></source>
        Your browser does not support the video tag.
      </video>
      {/* <button className={`play ${this.state.hasVideoStarted && 'hide'}`} onClick={this.playVideo} /> */}
    </div>);
};

export default Video;
