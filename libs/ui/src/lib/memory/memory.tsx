import React, { useState, useEffect } from "react";

import Image from "../image/image";

import './memory.scss';

/* eslint-disable-next-line */
export interface MemoryProps {}

const items = ['abfahrt','abmarsch','kochen','lagerstruktur','morgen','schlafen','tanzen','waschen'];

export const Memory = (props: MemoryProps) => {

  const [list, setList] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);

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
        setWinner(true);
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
      {winner && (
        <div>
          You Win !
          <br />
        </div>
      )}
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

  return (
    <div className="memory">
      <div className="cards">
        {list.map((item, index) => (
          <Card
            key={item.id}
            className={`card ${
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