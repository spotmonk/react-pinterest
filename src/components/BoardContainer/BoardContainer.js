import React from 'react';
import PropTypes from 'prop-types';

import boardsData from '../../helpers/data/boardsData';
import authData from '../../helpers/data/authData';

import Board from '../../Board/Board';
import smash from '../../helpers/data/smash';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
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

  render() {
    const { boards } = this.state;
    const { setSingleBoard } = this.props;
    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} deleteBoardAndPins={this.deleteBoardAndPins} />);

    return (
      <div className="card-columns">
        {boardCard}
      </div>
    );
  }
}

export default BoardContainer;
