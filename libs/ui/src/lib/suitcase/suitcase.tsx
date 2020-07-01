import React, { useState, useContext, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import Shake from 'react-reveal/Shake';
import Jump from 'react-reveal/Jump';
import Sound from 'react-sound';

import Image from '../image/image';
import {AppContext } from '../chapter/context';

import './suitcase.scss';

export const Suitcase = (props) => {

  const [character, setCharacter] = useContext(AppContext);

  const [drag, setDrag] = useState("");
  const [bagCounter, setBagCounter] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [winningSound, setWinningSound] = useState(false);
  const [lostSound, setLostSound] = useState(false);
  const [playStatus, setPlayStatus] = useState(Sound.status.PLAYING);
  const [falseCounter, setFalseCounter] = useState(0);

  useEffect(
    () => {
      setPlayStatus(Sound.status.PLAYING);
    }, [falseCounter]
  );

  const dropped = (e) => {
    e.containerElem.style.visibility = "hidden";
    setBagCounter(bagCounter +1);
    setDrag(`${character} packt ${e.dragData.label} ein.`);
    if (bagCounter === 4) {
      setWinningSound(true);
      setTimeout(() => setShowResult(true), 2500);
    }
  };

  const droppedFalseItem = (e) => {
    setDrag(`${character} braucht ${e.dragData.label} wohl eher nicht.`);
    setLostSound(true);
    setFalseCounter(falseCounter+1);
  };

  return (
    <div className='suitcase'>
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
      {winningSound && <Sound url={`./assets/sounds/game_won.mp3`} playStatus={Sound.status.PLAYING} />}
      {lostSound && <Sound url={`./assets/sounds/game_lost.mp3`} playStatus={playStatus} 
        onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)} />}
      {showResult && <Redirect exact to="reise" />}
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
