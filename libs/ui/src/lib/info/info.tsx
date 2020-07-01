import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from "@material-ui/styles";



/* eslint-disable-next-line */
export interface InfoProps {
  value: string
}

export const Info = (props: InfoProps) => {

  const useStyles = makeStyles(() => ({
    info: {
      background: 'url(./assets/info.svg) no-repeat 0 0 transparent',
      "&:hover": {
        background: 'url(./assets/info_highlighted.svg) no-repeat 0 0 transparent'
      }
    },
  }));
  const classes = useStyles();

  return (
    <Fade left delay={2000}>
      <div className={`infoLink ${classes.info}`}>
        <div className="infoText">
          <p dangerouslySetInnerHTML={{__html: props.value}} />
        </div>
      </div>
    </Fade>
  );
};

export default Info;
