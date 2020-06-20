import React, { useState, useContext } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import Shake from 'react-reveal/Shake';
import Jump from 'react-reveal/Jump';

import Image from '../image/image';
import {AppContext } from '../chapter/context';

import './suitcase.scss';

export const Suitcase = (props) => {

  const [character, setCharacter] = useContext(AppContext);

  const [drag, setDrag] = useState("");
  const [bagCounter, setBagCounter] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [falseCounter, setFalseCounter] = useState(0);

  const dropped = (e) => {
    e.containerElem.style.visibility = "hidden";
    setBagCounter(bagCounter +1);
    setDrag(`${character} packt ${e.dragData.label} ein.`);
    if (bagCounter === 5) {
      this.props.onCheckBag();
    }
  };

  const droppedFalseItem = (e) => {
    setDrag(`${character} braucht ${e.dragData.label} wohl eher nicht.`);
    setFalseCounter(falseCounter+1);
  };

  return (
    <div className='suitcase'>
      {/* <p className='description'>
        Um einen Gegenstand einzupacken, ziehe ihn direkt auf den Rucksack. <br /> Tipp: Manche Dinge werden in der
        Kinderrepublik dringend benötigt, andere gab es 1928 noch gar nicht.
      </p> */}
      <div className='items'>
        <Items targetKey='bag' label='ein Hemd' image='suitcase_hemd' />
        <Items targetKey='bag' label='eine Feldflasche' image='suitcase_feldflasche' />        
        <Items targetKey='negative' label='ein Radio' image='suitcase_radio' />
        <Items targetKey='bag' label='eine Seife' image='suitcase_seife' />
        <Items targetKey='negative' label='ein Smartphone' image='suitcase_smartphone' />
        <Items targetKey='bag' label='eine Zahnbürste' image='suitcase_zahnbürste' />
        <Items targetKey='negative' label='eine Karaffe' image='suitcase_karaffe' />
        <Items targetKey='negative' label='eine Topfpflanze' image='suitcase_topfpflanze' />
        <Items targetKey='bag' label='einen Löffel' image='suitcase_löffel' />
        <Items targetKey='negative' label='einen Hammer' image='suitcase_hammer' />
      </div>
      <DropTarget onHit={(e) => dropped(e)} targetKey='bag'>
        <DropTarget onHit={(e) => droppedFalseItem(e)} targetKey='negative'>
          <Jump spy={bagCounter}>
            <Shake spy={falseCounter}>
              <div className='bag'>
                <Image value='suitcase' />
                <div className='dragText'>{drag}</div>
              </div>
            </Shake>
          </Jump>
        </DropTarget>
      </DropTarget>
    </div>
  );
}

const Items = (props) => {
  return (
    <DragDropContainer
      targetKey={props.targetKey}
      dragData={{ label: props.label }}
      render={() => {
        return <Image value={props.image} />;
      }}
    />
  );
}

export default Suitcase;
