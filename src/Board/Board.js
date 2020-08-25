import React from 'react';
import PropTypes from 'prop-types';

class Board extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
    deleteBoardAndPins: PropTypes.func.isRequired,
  }

  singleBoardEvent = (e) => {
    e.preventDefault();
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { board, deleteBoardAndPins } = this.props;
    deleteBoardAndPins(board.id);
  }

  render() {
    const { board } = this.props;

    return (
      <div className="card m-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <h2 className="card-title">{board.name}</h2>
        <h5>{board.description}</h5>
        <button href="#" className="btn btn-secondary" onClick={this.singleBoardEvent}>View Board</button>
        <div><button onClick={this.deleteBoardEvent} className="btn-danger btn">X</button></div>
      </div>
    </div>
    );
  }
}

export default Board;
