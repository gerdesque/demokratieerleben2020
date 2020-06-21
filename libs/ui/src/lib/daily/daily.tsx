import React, { useState } from "react";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import shortid from 'shortid';
import { makeStyles } from '@material-ui/core/styles';

import Image from "../image/image";

import './daily.scss';

/* eslint-disable-next-line */
export interface DailyProps {}

const dailyItems = ["Waschen und Baden", "Frühstück", "Wanderungen machen", "Sprechstunde des Lagerarztes", 
"Lagerruhe - Post- und Zeitungsausgabe", "Tagung des Lagerparlaments", "Gemeinsame Veranstaltungen", "Zeltruhe"];
const schedule = ["6 Uhr", "8 Uhr", "8 ½ – 12 Uhr ", "8 ½ – 9 ½", "12 ½ – 14 ½ ",
"18 – 19 Uhr", "19 ½ – 21 Uhr", "21 Uhr"]
const description = "Um die einzelnen Tagespunkte in die richtige Reihenfolge zu bringen, ziehe sie einfach auf das Plakat. Klicke auf 'Tagesplan anzeigen!', um dir den originalen Tagesablauf anzusehen."

export const Daily = (props: DailyProps) => {

  const [result, setResult] = useState(false);

  const handleClick = () => {
    setResult(true);
    //props.onCheckDaily();
  };

  const getItems = () => {
    if (result) return;
    return (
      <div className="items">
        {dailyItems.map((item, index) =>
          <div key={index} className="item">
            <DragDropContainer targetKey="box" dragData={{label: item}}>
              <p>{item}</p>
            </DragDropContainer>
          </div>
        )}
      </div>
    )
  }

  const showStatus = () => {
    if (result) {
      return <Image value='daily_result' />
    }
    return (
      <>
        <Box targetKey="box"/>
        <button type='button' className='link-button show' onClick={() => handleClick()}>Tagesplan anzeigen!</button>
      </>
    )
  }
   
  return (
    <div className="daily">
      <div className="description">{description}</div>
      {getItems()}
      {showStatus()}
    </div>
  )
}

const Box = (props) => {
  const useStyles = makeStyles(() => ({
    box: {
      background: 'url(./assets/daily.webp) no-repeat center center'
      },
  }));
  const classes = useStyles();

  const [boxItems, setBoxItems] = useState([]);

  const handleDrop = (e) => {
    const items = boxItems.slice();
    items.push({label: e.dragData.label, uid: shortid.generate()});
    setBoxItems(items)
    e.containerElem.style.visibility="hidden";
  };

  const swap = (fromIndex, toIndex, dragData) => {
    const items = boxItems.slice();
    const item = {label: dragData.label, uid: shortid.generate()};
    items.splice(toIndex, 0, item);
    setBoxItems(items)
  };

  const kill = (uid) => {
    const items = boxItems.slice();
    const index = items.findIndex((item) => {
      return item.uid === uid
    });
    if (index !== -1) {
      items.splice(index, 1);
    }
    setBoxItems(items)
  };

  return (
    <DropTarget
      onHit={handleDrop}
      targetKey={props.targetKey}
      dropData={{name: props.name}}>
      <DropTarget
        onHit={handleDrop}
        targetKey="boxItem"
        dropData={{name: props.name}}>
        <div className={`component_box ${classes.box}`}>
          {boxItems.map((item, index) => {
            return (
              <BoxItem key={item.uid} uid={item.uid} kill={kill} index={index} swap={swap}>
                {item.label}
              </BoxItem>
            )
          })}
        </div>
      </DropTarget>
    </DropTarget>
  );
}

const BoxItem = (props) => {
  
  const handleDrop = (e) => {
    e.stopPropagation();
    props.swap(e.dragData.index, props.index, e.dragData);
    e.containerElem.style.visibility="hidden";
  };

  const deleteMe = () => {
    props.kill(props.uid);
  };

  return (
    <div className="box_item_component">
      <DragDropContainer
          targetKey="boxItem"
          dragData={{label: props.children, index: props.index}}
          onDrop={deleteMe}
          disappearDraggedElement={true}
          dragHandleClassName="grabber">
          <DropTarget
            onHit={handleDrop}
            targetKey="boxItem">
            <div className="outer">
              <div className="item">
                <span className="grabber">&#8759;</span>
                {schedule[props.index]}
                <span>&emsp;</span>
                {props.children}
              </div>
            </div>
        </DropTarget>
      </DragDropContainer>
    </div>
  );
}

export default Daily;