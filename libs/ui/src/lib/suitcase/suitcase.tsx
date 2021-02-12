import React, { useState, useContext, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import Shake from 'react-reveal/Shake';
import Jump from 'react-reveal/Jump';
import Sound from 'react-sound';

import Image from '../image/image';
import {AppContext } from '../chapter/context';



export const Suitcase = (props) => {

  const [character, setCharacter, language] = useContext(AppContext);

  const [drag, setDrag] = useState("");
  const [bagCounter, setBagCounter] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [winningSound, setWinningSound] = useState(false);
  const [rightSound, setRightSound] = useState(false);
  const [lostSound, setLostSound] = useState(false);
  const [lostPlayStatus, setLostPlayStatus] = useState(Sound.status.PLAYING);
  const [rightPlayStatus, setRightPlayStatus] = useState(Sound.status.PLAYING);
  const [falseCounter, setFalseCounter] = useState(0);

  useEffect(
    () => {
      setLostPlayStatus(Sound.status.PLAYING);
    }, [falseCounter]
  );

  useEffect(
    () => {
      setRightPlayStatus(Sound.status.PLAYING);
    }, [bagCounter]
  );

  const dropped = (e) => {
    e.containerElem.style.visibility = "hidden";
    setBagCounter(bagCounter +1);
    language === 'de' ? setDrag(`${character} packt ${e.dragData.label} ein.`) : 
      setDrag(`${character} packs ${e.dragData.label}.`);
    setRightSound(true);
    if (bagCounter === 4) {
      setWinningSound(true);
      setTimeout(() => setShowResult(true), 2500);
    }
  };

  const droppedFalseItem = (e) => {
    language === 'de' ? setDrag(`${character} braucht ${e.dragData.label} wohl eher nicht.`) : 
      setDrag(`${character} probably doesn't need ${e.dragData.label}.`);
    setLostSound(true);
    setFalseCounter(falseCounter+1);
  };

  return (
    <div className='suitcase'>
      <div className='items'>
        <Items targetKey='bag' labelDe='ein Hemd' labelEn='a shirt' image='suitcase_hemd' />
        <Items targetKey='bag' labelDe='eine Feldflasche' labelEn='a water bottle' image='suitcase_feldflasche' />        
        <Items targetKey='negative' labelDe='ein Radio' labelEn='a radio' image='suitcase_radio' />
        <Items targetKey='bag' labelDe='eine Seife' labelEn='a soap' image='suitcase_seife' />
        <Items targetKey='negative' labelDe='ein Smartphone' labelEn='a smartphone' image='suitcase_smartphone' />
        <Items targetKey='bag' labelDe='eine Zahnbürste' labelEn='a toothbrush' image='suitcase_zahnbürste' />
        <Items targetKey='negative' labelDe='eine Karaffe' labelEn='a carafe' image='suitcase_karaffe' />
        <Items targetKey='negative' labelDe='eine Topfpflanze' labelEn='a pot plant' image='suitcase_topfpflanze' />
        <Items targetKey='bag' labelDe='einen Löffel' labelEn='a spoon' image='suitcase_löffel' />
        <Items targetKey='negative' labelDe='einen Hammer' labelEn='a hammer' image='suitcase_hammer' />
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
      {rightSound && <Sound url={`./assets/sounds/game_right.mp3`} playStatus={rightPlayStatus}
        onFinishedPlaying={() => setRightPlayStatus(Sound.status.STOPPED)} />}
      {lostSound && <Sound url={`./assets/sounds/game_lost.mp3`} playStatus={lostPlayStatus} 
        onFinishedPlaying={() => setLostPlayStatus(Sound.status.STOPPED)} />}
      {showResult && <Redirect exact to="reise" />}
    </div>
  );
}

const Items = (props) => {
  const [,, language] = useContext(AppContext);
  return (
    <DragDropContainer
      targetKey={props.targetKey}
      dragData={{ label: language === 'de' ? props.labelDe : props.labelEn }}
      render={() => {
        return <Image value={props.image} />;
      }}
    />
  );
}

export default Suitcase;
