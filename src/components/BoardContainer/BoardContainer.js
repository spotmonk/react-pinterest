import React from 'react';
import PropTypes from 'prop-types';

import boardsData from '../../helpers/data/boardsData';
import authData from '../../helpers/data/authData';

import Board from '../../Board/Board';
import BoardForm from '../BoardForm/BoardForm';
import smash from '../../helpers/data/smash';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
    editBoard: {},
  }

  getBoards = () => {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('get boards broke', err));
  }

  componentDidMount() {
    this.getBoards();
  }

  deleteBoardAndPins = (boardId) => {
    smash.deletePinsByBoard(boardId)
      .then(() => this.getBoards())
      .catch((err) => console.error('get pins failed', err));
  }

  createBoard = (newBoard) => {
    boardsData.addBoard(newBoard)
      .then(() => {
        this.getBoards();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('Create Board Broke', err));
  }

  editABoard = (boadToEdit) => {
    this.setState({ formOpen: true, editBoard: boadToEdit });
  }

  putBoard = (boardId, boardToPut) => {
    boardsData.updateBoard(boardId, boardToPut)
      .then(() => {
        this.getBoards();
        this.setState({ formOpen: false, editBoard: {} });
      })
      .catch((err) => console.warn("couldn't update", err));
  }

  render() {
    const { boards, formOpen, editBoard } = this.state;
    const { setSingleBoard } = this.props;
    const boardCard = boards.map((board) => <Board key={board.id} board={board} editABoard={this.editABoard}setSingleBoard={setSingleBoard} deleteBoardAndPins={this.deleteBoardAndPins} />);

    return (
      <div>
        <button className="btn btn-warning" onClick={ () => { this.setState({ formOpen: !formOpen }); }}>Add Board</button>
        {formOpen ? <BoardForm board={editBoard} putBoard={this.putBoard} createBoard={this.createBoard} /> : ''}
        <div className="card-columns">
          {boardCard}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
