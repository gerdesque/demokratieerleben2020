import React, {useState} from 'react';
import { IMAGE_SUFFIX } from '@gerdesque/data';
import { makeStyles } from '@material-ui/core/styles';
import './puzzle.scss';

export const Puzzle = () => {
  const useStyles = makeStyles(() => ({
    puzzle: {
      backgroundImage: `url(${"./assets/daheim_puzzle"+IMAGE_SUFFIX})`,
      boxShadow: '0 0 8px 8px #dcd5cc inset',
      },
  }));
  const classes = useStyles();

  const pieces = [...Array(16)].map((_, i) => ({
      img: `daheim_puzzle_${("0" + (i + 1)).substr(-2)}`,
      order: i,
      board: "shuffled"
    }));

  const shufflePieces = (pieces) => {
    const shuffled = [...pieces];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }
  const [shuffled, setShuffled] = useState(shufflePieces(pieces));
  const [solved, setSolved] = useState([...Array(16)]);

  // const handleDrop = (e, targetName) => {
  //   let target = this.state[targetName];
  //   const pieceOrder = e.dragData.piece.order;
  //   if (target[pieceOrder]) return;

  //   const pieceData = this.state.pieces.find(p => p.order === +pieceOrder);
  //   const origin = this.state[pieceData.board];

  //   if (targetName === pieceData.board) target = origin;
  //   origin[origin.indexOf(pieceData)] = undefined;
  //   target[pieceOrder] = pieceData;
  //   pieceData.board = targetName;

  //   this.setState({ [pieceData.board]: origin, [targetName]: target });
  //   this.checkBoard();
  // }

  const handleDrop = (e, index, targetName) => {
    e.preventDefault();
    let target = targetName === 'shuffled' ? shuffled : solved; 
    //if (target[index]) return;
  
    const pieceOrder = e.dataTransfer.getData('text');
    const pieceData = pieces.find(p => p.order === +pieceOrder);
    const origin = pieceData.board === 'shuffled' ? shuffled : solved;
    
    if (targetName === pieceData.board) target = origin;
    //origin[origin.indexOf(pieceData)] = undefined;
    //target[pieceOrder] = pieceData;
    //pieceData.board = targetName;

    //   this.setState({ [pieceData.board]: origin, [targetName]: target });

    const newShuffled = [...shuffled];
    newShuffled[newShuffled.indexOf(pieceData)] = undefined;

    solved[index] = pieceData;
    setShuffled(newShuffled);
  }

  const handleDragStart = (e, order) => {
    e.dataTransfer.setData('text/plain', order);
  }

  const renderPieceContainer = (piece, index, boardName) => {
    return (
      <li key={index}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, index, boardName)}>
        {piece && <img
          draggable
          onDragStart={(e) => handleDragStart(e, piece.order)}
          alt=""
          src={`./assets/${piece.img}.webp`}/>}
      </li>
    );
  }

  return (
    <div className='puzzleBox'>
      <div className='puzzle'>
        <ul className='puzzle__shuffled-board'>
          {shuffled.map((piece, i) => renderPieceContainer(piece, i, "shuffled"))}
        </ul>
        <ol className={`puzzle__solved-board ${classes.puzzle}`}>
          {solved.map((piece, i) => renderPieceContainer(piece, i, "solved"))}
        </ol>
      </div>
    </div>
  );
};

export default Puzzle;
