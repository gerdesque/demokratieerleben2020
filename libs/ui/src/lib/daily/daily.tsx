import React, { useContext, useState } from "react";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import shortid from 'shortid';
import { makeStyles } from '@material-ui/core/styles';

import Image from "../image/image";
import { AppContext } from "../chapter/context";

/* eslint-disable-next-line */
export interface DailyProps {}

export const Daily = (props: DailyProps) => {
  const [,,language] = useContext(AppContext);
  const [result, setResult] = useState(false);

  const dailyItems = language === 'de' ? 
    ["Waschen und Baden", "Frühstück", "Wanderungen machen", "Sprechstunde des Lagerarztes", 
    "Lagerruhe - Post- und Zeitungsausgabe", "Tagung des Lagerparlaments", "Gemeinsame Veranstaltungen", "Zeltruhe"] :
    ["Washing and bathing", "Breakfast", "Hiking", "Consultation hours of the camp doctor", 
    "Camp rest - mail and newspaper delivery", "Meeting of the camp parliament", "Common events", "Camp rest"];
  const daily = language === 'de' ? "Tagesplan anzeigen!" : "Show daily schedule!";

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
      const imgValue = language === 'de' ? 'daily_result_DE' : 'daily_result_EN';
      return <Image value={imgValue} />
    }
    return (
      <>
        <Box targetKey="box"/>
        <p className="redirect" onClick={() => handleClick()}>{daily}</p>
      </>
    )
  }
   
  return (
    <div className="daily">
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
  const [,,language] = useContext(AppContext);
  const schedule = language === 'de' ? 
  ["6 Uhr", "8 Uhr", "8 ½ – 12 Uhr", "8 ½ – 9 ½", "12 ½ – 14 ½ ", "18 – 19 Uhr", "19 ½ – 21 Uhr", "21 Uhr"] :
  ["6 am", "8 am", "8.30 to 12 am", "8.30 to 9.30 am", "12.30 to 2.30 pm", "6 to 7 pm", "7.30 to 9 pm", "9 pm"]

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