import React from 'react';
import PropTypes from 'prop-types';

class Board extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
    deleteBoardAndPins: PropTypes.func.isRequired,
    editABoard: PropTypes.func.isRequired,
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

  editBoardEvent = (e) => {
    e.preventDefault();
    const { board, editABoard } = this.props;
    editABoard(board);
  }

  render() {
    const { board } = this.props;

    return (
      <div className="card m-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <h2 className="card-title">{board.name}</h2>
        <h5>{board.description}</h5>
        <div className="btn-group" role="group">
        <button className="btn btn-warning" onClick={this.editBoardEvent}><i className="fas fa-edit"></i></button>
        <button href="#" className="btn btn-secondary" onClick={this.singleBoardEvent}>View Board</button>
        <button onClick={this.deleteBoardEvent} className="btn-danger btn">X</button></div>
      </div>
    </div>
    );
  }
}

export default Board;
