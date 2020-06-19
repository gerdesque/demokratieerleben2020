import React from 'react';

import Title from '../title/title';
import Scrollicon from '../scrollicon/scrollicon';

import { IMAGE_SUFFIX } from '@gerdesque/data';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  link: string
  name?: string
}

export const Header = (props: HeaderProps) => {

  const [volume, setVolume] = React.useState(false);

  const audio = new Audio(`./assets/sounds/${props.link}.mp3`)
  const startAudio = () => {
    setVolume(!volume);
    volume ? audio.pause() : audio.play();
  }

  const useStyles = makeStyles(() => ({
    chapter: {
      backgroundImage: `url(${"./assets/"+ props.link+IMAGE_SUFFIX})`,
      boxShadow: '0 0 8px 8px #dcd5cc inset',
      flexDirection: 'column',
      },
  }));
  const classes = useStyles();

  return (
    <section className='parallax__group parallax__header'>
      <div className={`parallax__layer parallax__layer--base fade-in-scale ${classes.chapter}`}>
        <Title text={props.name} />
        <Chip onClick={() => startAudio()} label={volume ? "Ton aus" : "Ton an"} />
        <Scrollicon/>
      </div>
    </section>
  );
};

export default Header;
