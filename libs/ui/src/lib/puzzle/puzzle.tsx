import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Sound from 'react-sound';



class Puzzle extends Component {
  state = {
    pieces: [],
    shuffled: [],
    solved: [],
    winner: false,
    winningSound: false,
    chance: false,
    playStatus: Sound.status.PLAYING
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

    this.setState({ [pieceData.board]: origin, [targetName]: target, chance: false });
    this.checkWinner();
  }

  handleDragStart(e, order) {
    const dt = e.dataTransfer;
    dt.setData("text/plain", order);
    dt.effectAllowed = "move";
  }

  checkWinner() {
    for (let i = 0, l = this.state.solved.length; i < l; i++) {
      if (typeof(this.state.solved[i]) === 'undefined') return;
    };

    const finished = this.state.solved.find((piece, index) => piece.order !== index);

    if (finished === undefined) {
      this.setState({ winningSound: true })
      setTimeout(() => this.setState({ winner: true }), 2500);
    } else {
      this.setState({ chance: true })
    }
  }

  render() {
    return (
      <>
        <div className='puzzle'>
          <ul className='puzzle__shuffled-board'>
            {this.state.shuffled.map((piece, i) => this.renderPieceContainer(piece, i, "shuffled"))}
          </ul>
          <ol className='puzzle__solved-board' style={{ backgroundImage: `url(./assets/daheim_puzzle.webp)` }}>
            {this.state.solved.map((piece, i) => this.renderPieceContainer(piece, i, "solved"))}
          </ol>
          {this.state.winningSound && <Sound url={`./assets/sounds/game_won.mp3`} playStatus={Sound.status.PLAYING} />}
          {this.state.winner && <Redirect exact to="ortsgruppe" />}
        </div>
        {this.state.chance &&
          <>
            <p>Der Weg scheint noch nicht ganz richtig. Versuch es noch einmal!</p>
            <Sound url={`./assets/sounds/game_lost.mp3`} playStatus={this.state.playStatus}
              onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })} />
          </>}
      </>
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
