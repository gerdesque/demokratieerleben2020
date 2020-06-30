import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import Sound from 'react-sound';
import { makeStyles } from '@material-ui/core/styles';

import Image from "../image/image";
import { IMAGE_SUFFIX } from '@gerdesque/data';

import './memory.scss';

/* eslint-disable-next-line */
export interface MemoryProps {}

const items = ['abfahrt','abmarsch','kochen','lagerstruktur','morgen','schlafen','tanzen','waschen'];

export const Memory = (props: MemoryProps) => {

  const [list, setList] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);
  const [winningSound, setWinningSound] = useState(false);

  const checkItems = (firstIndex, secondIndex) => {
    if (
      firstIndex !== secondIndex &&
      list[firstIndex].name === list[secondIndex].name
    ) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
    } else {
      setTimeout(() => {
        setVisibleItems([]);
      }, 600);
    }
  };

  useEffect(
    () => {
      setList(items
        .concat(items).map((name, i) => ({
          name,
          id: i
        }))
        .sort(() => {
          return 0.5 - Math.random();
        }));
    },
    []
  );

  useEffect(
    () => {
      if (finishedItems.length > 0 && finishedItems.length === list.length) {
        setWinningSound(true);
        setTimeout(() => setWinner(true), 2500);
      }
    },
    [finishedItems, list]
  );

  return (
    <div>
      <Grid
        list={list}
        visibleItems={visibleItems}
        setVisibleItems={setVisibleItems}
        finishedItems={finishedItems}
        checkItems={checkItems}
      />
      {winningSound && <Sound url={`./assets/sounds/game_won.mp3`} playStatus={Sound.status.PLAYING} />}
      {winner && <Redirect exact to="endkapitel" />}
    </div>
  );
}

const Grid = props => {
  const {
    list,
    visibleItems,
    setVisibleItems,
    finishedItems,
    checkItems
  } = props;

  const useStyles = makeStyles(() => ({
    card: {
      "&::after": {
        background: `url(./assets/logo${IMAGE_SUFFIX})`
      }
    },
  }));
  const classes = useStyles();

  return (
    <div className="memory">
      <div className="cards">
        {list.map((item, index) => (
          <Card
            key={item.id}
            className={`card ${classes.card} ${
              visibleItems.includes(index) ? "grid-card-show" : ""
            } ${
              finishedItems.includes(index)
                ? "grid-card-show grid-card-finished"
                : ""
            }`}
            onClick={() => {
              if (!finishedItems.includes(index)) {
                switch (visibleItems.length) {
                  case 0:
                    setVisibleItems([index]);
                    break;
                  case 1:
                    if (visibleItems[0] !== index) {
                      setVisibleItems(visibleItems.concat(index));
                      checkItems(visibleItems[0], index);
                    }
                    break;
                  case 2:
                    setVisibleItems([index]);
                    break;
                  default:
                    setVisibleItems([]);
                }
              }
            }}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

Grid.defaultProps = {
  list: []
};

const Card = props => {
  const { name, className, onClick } = props;
  return (
    <div className={`${className}`} onClick={onClick}>
      <Image value={`memory_${name}`} />
    </div>
  );
};

export default Memory;