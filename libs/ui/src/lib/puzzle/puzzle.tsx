import React, { Component } from "react";
import './puzzle.scss';

class Puzzle extends Component {
  state = {
    pieces: [],
    shuffled: [],
    solved: []
  };

  componentDidMount() {
    const pieces = [...Array(16)].map((_, i) => ({
      img: `daheim_puzzle_${("0" + (i + 1)).substr(-2)}.webp`,
      order: i,
      board: "shuffled"
    }));

    this.setState({
      pieces,
      shuffled: this.shufflePieces(pieces),
      solved: [...Array(16)]
    });
  }

  handleDrop(e, index, targetName) {
    e.preventDefault();
    let target = this.state[targetName];
    if (target[index]) return;

    const pieceOrder = e.dataTransfer.getData("text");
    const pieceData = this.state.pieces.find(p => p.order === +pieceOrder);
    const origin = this.state[pieceData.board];

    if (targetName === pieceData.board) target = origin;
    origin[origin.indexOf(pieceData)] = undefined;
    target[index] = pieceData;
    pieceData.board = targetName;

    this.setState({ [pieceData.board]: origin, [targetName]: target });
  }

  handleDragStart(e, order) {
    const dt = e.dataTransfer;
    dt.setData("text/plain", order);
    dt.effectAllowed = "move";
  }

  render() {
    return (
      <div className='puzzle'>
        <ul className='puzzle__shuffled-board'>
          {this.state.shuffled.map((piece, i) => this.renderPieceContainer(piece, i, "shuffled"))}
        </ul>
        <ol className='puzzle__solved-board' style={{ backgroundImage: `url(./assets/daheim_puzzle.webp)` }}>
          {this.state.solved.map((piece, i) => this.renderPieceContainer(piece, i, "solved"))}
        </ol>
      </div>
    );
  }

  renderPieceContainer(piece, index, boardName) {
    return (
      <li
        key={index}
        onDragOver={e => e.preventDefault()}
        onDrop={e => this.handleDrop(e, index, boardName)}
      >
        {piece && (
          <img
            draggable
            alt=""
            onDragStart={e => this.handleDragStart(e, piece.order)}
            src={(`./assets/${piece.img}`)}
          />
        )}
      </li>
    );
  }

  shufflePieces(pieces) {
    const shuffled = [...pieces];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }
}

export default Puzzle;
