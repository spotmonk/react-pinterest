import React from 'react';
import PropTypes from 'prop-types';

import boardsData from '../../helpers/data/boardsData';
import authData from '../../helpers/data/authData';

import Board from '../../Board/Board';
import BoardForm from '../BoardForm/BoardForm';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
  }

  componentDidMount() {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('get boards broke', err));
  }

  createBoard = (newBaord) => {
    boardsData.addBoard()
      .then( this.get)
      .catch((err) => console.warn('get board broke', err));
  }

  render() {
    const { boards, formOpen } = this.state;
    const { setSingleBoard } = this.props;
    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} />);

    return (
      <div>
        <button className="btn btn-warning" onClick={ () => { this.setState({ formOpen: !formOpen }); }}>Add Board</button>
        {formOpen ? <BoardForm /> : ''}
        <div className="card-columns">
          {boardCard}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
