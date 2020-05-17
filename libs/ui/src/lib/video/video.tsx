import React from 'react';
import { API_URL, VIDEO_SUFFIX } from '@gerdesque/data';

import './video.scss';

/* eslint-disable-next-line */
export interface VideoProps {
  value: string
}

export const Video = (props: VideoProps) => {
  // const playVideo = () => {
  //   this.setState({ hasVideoStarted: true });
  //   this.refs.video.play();
  // };

  return (
    <div className="video">
      <video>
        <source type='video/mp4' src={API_URL+"/movies/"+props.value+VIDEO_SUFFIX}></source>
        Your browser does not support the video tag.
      </video>
      {/* <button className={`play ${this.state.hasVideoStarted && 'hide'}`} onClick={this.playVideo} /> */}
    </div>);
};

export default Video;
